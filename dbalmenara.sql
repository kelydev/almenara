create database dbalmenara;
use dbalmenara;

create table roles
(
id serial not null,
name varchar(80) not null,
status boolean not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL, 
primary key(id)
);

create table users
(
id serial not null,
role_id integer not null,
name varchar(80) not null,
last_name varchar(80) not null,
email varchar(170) not null,
password varchar(180) not null,
status boolean not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL,
foreign key(role_id) references roles(id)
on delete cascade on update cascade,
primary key(id)
);

create table categories
(
id serial not null,
name varchar(80) not null,
status boolean not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL, 
primary key(id)
);

create table products
(
id serial not null,
category_id integer not null,
name varchar(80) not null,
description varchar(80) not null,
price decimal (10, 2) not null,
image varchar(80) not null,
stock int not null,
status boolean not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL,
foreign key(category_id) references categories(id)
on delete cascade on update cascade,
primary key(id)
);

create table shopping_cart
(
id serial not null,
user_id integer not null,
product_id integer not null,
quantity int not null,
price decimal (10, 2) not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL,
foreign key(user_id) references users(id)
on delete cascade on update cascade,
foreign key(product_id) references products(id)
on delete cascade on update cascade,
primary key(id)
);

create table coupons
(
id serial not null,
name varchar(50) not null,
code varchar(50) not null,
amount decimal (10, 2) not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL, 
primary key(id)
);

create table store_sections
(
id serial not null,
name varchar(50) not null,
status boolean not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL, 
primary key(id)
);

create table stores
(
id serial not null,
store_section_id integer not null,
name varchar(50) not null,
address varchar(50) not null,
phone int not null,
image varchar(50) not null,
opening_hours int not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL,
foreign key(store_section_id) references store_sections(id)
on delete cascade on update cascade,
primary key(id)
);

create table orders
( 
id integer not null,
user_id integer not null,
store_id integer not null,
coupon_id integer not null,
date_creation date not null,
date_delivery date not null,
subtotal_price decimal (10, 2) not null,
total_price decimal (10, 2) not null,
amount_igv decimal (10, 2) not null,
payment varchar(20) not null,
operation_code varchar(70) not null,
status boolean not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL,
foreign key(user_id) references users(id)
on delete cascade on update cascade,
foreign key(store_id) references stores(id)
on delete cascade on update cascade,
foreign key(coupon_id) references coupons(id)
on delete cascade on update cascade,
primary key(id)
);

create table order_detail
( 
id integer not null,
product_id integer not null,
order_id integer not null,
quantity int not null,
price decimal (10, 2) not null,
created_at timestamp with time zone NOT NULL,
updated_at timestamp with time zone NOT NULL,
foreign key(product_id) references products(id)
on delete cascade on update cascade,
foreign key(order_id) references orders(id)
on delete cascade on update cascade,
primary key(id)
);