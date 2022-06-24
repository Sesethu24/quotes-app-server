create table love_user(
    id serial not null primary key,
    username varchar,
    password varchar,
    love_counter int
);