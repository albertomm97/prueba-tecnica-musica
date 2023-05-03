# react-search-music-app

Simple React application to search for songs using Deezer API (through RapidAPI service).

Features:
  1. Search songs 
  2. Sort by rank
  3. useRef to avoid repeating search with same query
  5. useMemo to only sort when its needed
  6. useCallback to only create some functions once.

To use the application:
 1. Run npm install
 2. Create RapidAPI account
 3. Search for Deezer
 4. Copy X-RapidAPI-Key header parameter
 5. Create a .env file in the root directory
 6. Add an environment variable VITE_RAPID_API_KEY=your X-RapidAPI-Key
 7. Run npm run dev
 
If the API returns an error, try searching again until it works.
