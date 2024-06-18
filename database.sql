CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.')
('images/dog.jpeg', 'Sleeping Dog', 'Photo of my girlfriends family dog sleeping.'),
('images/hot_dish.jpeg', 'Hottest Casserole', 'Multiple trays of my signature tater tot hot dish.'),
('images/risky_brother.jpeg', 'Reckless Brother', 'My older brother hunting in the rockies and finding a helpful sign.')
('images/kitties.jpeg', 'Cute Cats', 'My own personal pets, Baxter(orange) and Ozzy(dark/long hair)');