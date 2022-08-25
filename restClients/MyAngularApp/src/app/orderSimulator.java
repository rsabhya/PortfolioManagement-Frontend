package com.conygre.training.ordersimulator.dao;

import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Repository;


/**
 * This class is a test harness class - it only exists for testing.
 * 
 * This is SIMULATING sending trade orders to an exchange for them to be filled.
 * 
 * This class uses the following codes to represent the state of an order:
 * 
 * 0 : initialized i.e. has not yet been processed at all
 * 1 : processing  i.e. the order has been sent to an exchange, we are waiting for a response
 * 2 : filled i.e. the order was successfully placed
 * 3 : rejected i.e. the order was not accepted by the trading exchange
 * 
 * The above are JUST SUGGESTED VALUES, you can change or improve as you see think is appropriate.
 */
@Repository
public class OrderProcessingSimulator {
	
	// Standard mechanism for logging with spring boot - org.slf4j is built-in to spring boot
	private static final Logger LOG = LoggerFactory.getLogger(OrderProcessingSimulator.class);

	// You'll need to change these to match whatever you called your table and status_code field
	// You may also need to change the database name in application-mysql.properties and application-h2.properties
	// The default database name that's used here is "appDB"
	@Value("${mysql.stocks.name}")
	private String TABLE;
	
	@Value("${mysql.transaction_type.colname}")
	private String STATUS_CODE;

	@Value("${percent.failures}")
	private int percentFailures = 10;

	@Autowired
	private JdbcTemplate template;

	/**
	 * Any record in the configured database table with STATE=0 (init)
	 * 
	 * Will be changed to STATE=1 (processing)
	 * 
	 * Note the @Scheduled : this tells spring to automatically call this method on a schedule
	 * 
	 * 10000 indicates to spring that this method should be called every 10,000 milliseconds (10s)
	 */
	@Scheduled(fixedRateString = "${proc.rate.ms:10000}")
	public int findTradesForProcessing() {
		String sql = "UPDATE " + TABLE + " SET " + STATUS_CODE + "=1 WHERE " + STATUS_CODE + "=0";
		int numberChanged = template.update(sql);
		
		LOG.debug("Updated [" + numberChanged + "] order from initialized (0) TO processing (1)");
		
		return numberChanged;
	}
	
	/**
	 * Anything in the configured database table with STATE=1 (processing)
	 * 
	 * Will be changed to STATE=2 (filled) OR STATE=3 (rejected)
	 * 
	 * This method uses a random number to determine when trades are rejected.
	 * 
	 * Note the @Scheduled : this tells spring to automatically call this method on a schedule
	 * 
	 * 10000 indicates to spring that this method should be called every 10,000 milliseconds (10s)
	 */
	@Scheduled(fixedRateString = "${fill.rate.ms:15000}")
	public int findTradesForFillingOrRejecting() {
		int totalChanged = 0;
		int lastChanged = 0;

		do {
			lastChanged = 0;
			
			// use a random number to decide if we'll simulate success OR failure
			int randomInteger = new Random().nextInt(100);

			LOG.debug("Random number is [" + randomInteger +
					  "] , failure rate is [" + percentFailures + "]");
						
			if(randomInteger > percentFailures) {
				// Mark this one as success
				lastChanged = markTradeAsSuccessOrFailure(2);
				LOG.debug("Updated [" + lastChanged + "] order from processing (1) TO success (2)");
			}
			else {
				// Mark this one as failure!!
				lastChanged = markTradeAsSuccessOrFailure(3);
				LOG.debug("Updated [" + lastChanged + "] order from processing (1) TO failure (3)");
			}
			totalChanged += lastChanged;

		} while (lastChanged > 0);

		return totalChanged;
	}

	/*
	 * Update a single record to success or failure
	 */
	private int markTradeAsSuccessOrFailure(int successOrFailure) {
		String sql = "UPDATE " + TABLE + " SET " + STATUS_CODE + "=" +
	                 successOrFailure + " WHERE " + STATUS_CODE + "=1 limit 1";
		return template.update(sql);
	}

	public void setPercentFailures(int percentFailures) {
		this.percentFailures = percentFailures;
	}

}