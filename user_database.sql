-- User Database Schema
-- Created by: Allison
-- Created on: October 2, 2024
-- Description: SQL script to define the schema for a user database in a social networking platform.
-- Tables: Users, Posts, Comments, Friendships, Messages, Likes

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY, --
    username VARCHAR(50) UNIQUE NOT NULL, --
    password_hash VARCHAR(255) NOT NULL, --
    email VARCHAR(100) UNIQUE NOT NULL, --
    first_name VARCHAR(50),
    last_name VARCHAR(50), 
    profile_picture_url VARCHAR(255),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- CREATE TABLE Posts (
--     post_id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES Users(user_id),
--     content TEXT NOT NULL,
--     image_url VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Comments (
--     comment_id SERIAL PRIMARY KEY,
--     post_id INT REFERENCES Posts(post_id),
--     user_id INT REFERENCES Users(user_id),
--     content TEXT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Likes (
--     like_id SERIAL PRIMARY KEY,
--     post_id INT REFERENCES Posts(post_id),
--     user_id INT REFERENCES Users(user_id),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Friendships (
--     friendship_id SERIAL PRIMARY KEY,
--     user_id_1 INT REFERENCES Users(user_id),
--     user_id_2 INT REFERENCES Users(user_id),
--     status VARCHAR(20) CHECK (status IN ('Pending', 'Accepted', 'Blocked')),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Messages (
--     message_id SERIAL PRIMARY KEY,
--     sender_id INT REFERENCES Users(user_id),
--     receiver_id INT REFERENCES Users(user_id),
--     content TEXT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     is_read BOOLEAN DEFAULT FALSE
-- );

-- CREATE TABLE Groups (
--     group_id SERIAL PRIMARY KEY,
--     group_name VARCHAR(100) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- CREATE TABLE GroupMembers (
--     group_member_id SERIAL PRIMARY KEY,
--     group_id INT REFERENCES Groups(group_id),
--     user_id INT REFERENCES Users(user_id),
--     joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
