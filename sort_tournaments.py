import json
from collections import defaultdict

def sort_tournaments_by_category(input_file, output_file):
    # Read the JSON file
    with open(input_file, 'r') as f:
        tournaments = json.load(f)
    
    # Group tournaments by category
    categories = defaultdict(list)
    for tournament in tournaments:
        categories[tournament['category_name']].append(tournament)
    
    # Sort categories and tournaments within each category
    sorted_data = []
    for category in sorted(categories.keys()):
        # Sort tournaments within category by tournament name
        category_tournaments = sorted(categories[category], key=lambda x: x['tournament_name'])
        sorted_data.extend(category_tournaments)
    
    # Write the sorted data to a new file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(sorted_data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    input_file = "soccer_data_20250215_113953.json"
    output_file = "soccer_data_sorted.json"
    sort_tournaments_by_category(input_file, output_file)
    print(f"Sorted data has been written to {output_file}")
