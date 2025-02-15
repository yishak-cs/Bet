import requests
import json
from datetime import datetime
import logging
import time

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SportsDataScraper:
    def __init__(self):
        self.api_url = "https://api.gowallet.et/api/v1/top-sports"
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

    def make_request(self):
        """Make HTTP request to the API endpoint"""
        try:
            # First make a request to gobet.et to simulate browser behavior
            session = requests.Session()
            session.get("https://gobet.et", headers=self.headers)
            
            # Then make the API request
            response = session.get(self.api_url, headers=self.headers)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            logger.error(f"Error making request: {str(e)}")
            return None

    def find_sport_data(self, data, sport_name="Soccer"):
        """Find the specified sport data from the response"""
        sports_data = data.get('sports', [])
        for sport in sports_data:
            if sport.get('sport_name') == sport_name:
                return sport
        return None

    def extract_soccer_data(self, data):
        """Extract soccer data from the response"""
        try:
            # Find soccer data by sport_name
            soccer_data = self.find_sport_data(data, "Soccer")
            if not soccer_data:
                logger.error("Soccer data not found in response")
                logger.info("Available sports:")
                for sport in data.get('sports', []):
                    logger.info(f"- {sport.get('sport_name', 'Unknown')} (ID: {sport.get('sport_id', 'Unknown')})")
                return []

            logger.info(f"Processing sport: {soccer_data.get('sport_name')} (ID: {soccer_data.get('sport_id')})")
            matches = soccer_data.get('matches', [])
            logger.info(f"Found {len(matches)} matches")

            # Use a set to track unique combinations
            unique_entries = set()
            extracted_data = []

            for match in matches:
                # Create a tuple of the values to use as a unique identifier
                entry_key = (
                    match.get('category_name'),
                    match.get('tournament_name'),
                    match.get('tournament_id')
                )
                
                # Only add if this combination hasn't been seen before
                if entry_key not in unique_entries:
                    unique_entries.add(entry_key)
                    match_data = {
                        'category_name': entry_key[0],
                        'tournament_name': entry_key[1],
                        'tournament_id': entry_key[2]
                    }
                    extracted_data.append(match_data)

            logger.info(f"Found {len(matches)} total matches, {len(extracted_data)} unique tournaments")
            return extracted_data

        except Exception as e:
            logger.error(f"Error extracting soccer data: {str(e)}")
            return []

    def save_to_json(self, data, filename=None):
        """Save extracted data to JSON file"""
        if not filename:
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f'soccer_data_{timestamp}.json'
        
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=4, ensure_ascii=False)
            logger.info(f"Data successfully saved to {filename}")
            return True
        except Exception as e:
            logger.error(f"Error saving data to JSON: {str(e)}")
            return False

    def run(self, output_file=None):
        """Run the complete scraping process"""
        # Make the request
        response_data = self.make_request()
        if not response_data:
            return False

        # Extract soccer data
        soccer_data = self.extract_soccer_data(response_data)
        if not soccer_data:
            return False

        # Save to JSON
        return self.save_to_json(soccer_data, output_file)

def main():
    scraper = SportsDataScraper()
    scraper.run()

if __name__ == "__main__":
    main()