-- Build script for a new database

-- School

DROP TABLE IF EXISTS school;

CREATE TABLE school (
    id varchar(255) NOT NULL UNIQUE,
    name varchar(255) NOT NULL
);

INSERT INTO school (
    id,
    name
) VALUES (
    '1',
    'McGill'
);

INSERT INTO school (
    id,
    name
) VALUES (
    '2',
    'Concordia'
);

INSERT INTO school (
    id,
    name
) VALUES (
    '3',
    'Polytechnique'
);

INSERT INTO school (
    id,
    name
) VALUES (
    '4',
    'Other'
);

SELECT * FROM school;

-- Year

DROP TABLE IF EXISTS year;

CREATE TABLE year (
    id varchar(255) NOT NULL UNIQUE,
    name varchar(255) NOT NULL
);

INSERT INTO year (
    id,
    name
) VALUES (
    '1',
    'U1'
);

INSERT INTO year (
    id,
    name
) VALUES (
    '2',
    'U2'
);

INSERT INTO year (
    id,
    name
) VALUES (
    '3',
    'U3'
);

INSERT INTO year (
    id,
    name
) VALUES (
    '4',
    'U4+'
);

SELECT * FROM year;

-- Degree

DROP TABLE IF EXISTS degree;

CREATE TABLE degree (
    id varchar(255) NOT NULL UNIQUE,
    name varchar(255) NOT NULL
);

INSERT INTO degree (
    id,
    name
) VALUES (
    '1',
    'Undergraduate'
);

INSERT INTO degree (
    id,
    name
) VALUES (
    '2',
    'Masters'
);

INSERT INTO degree (
    id,
    name
) VALUES (
    '3',
    'PhD'
);

SELECT * FROM degree;

-- Member Type

DROP TABLE IF EXISTS member_type;

CREATE TABLE member_type (
    id varchar(255) NOT NULL UNIQUE,
    name varchar(255) NOT NULL
);

INSERT INTO member_type (
    id,
    name
) VALUES (
    '1',
    'Subscriber'
);

INSERT INTO member_type (
    id,
    name
) VALUES (
    '2',
    'Active Member'
);

INSERT INTO member_type (
    id,
    name
) VALUES (
    '3',
    'Contributer'
);

INSERT INTO member_type (
    id,
    name
) VALUES (
    '4',
    'Executive'
);

SELECT * FROM member_type;

-- Member

DROP TABLE IF EXISTS member;

CREATE TABLE member (
    id varchar(255) NOT NULL UNIQUE,
    qr_code_url varchar(255),
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    phone varchar(255),
    resume_url varchar(255),
    subscribed boolean,
    school_id varchar(10),
    year_id varchar(10),
    degree_id varchar(10),
    member_type_id varchar(10)
);

INSERT INTO member (
    id,
    qr_code_url,
    first_name,
    last_name,
    email,
    phone,
    resume_url,
    subscribed,
    school_id,
    year_id,
    degree_id,
    member_type_id
) VALUES (
    '1',
    'https://user-images.githubusercontent.com/10589755/29107602-89773dd0-7d0d-11e7-934b-5d072f62efdb.png',
    'Default',
    'Member',
    'default@gmail.com',
    '1234567890',
    'https://pdf.com',
    true,
    '1',
    '1',
    '1',
    '1'
);

SELECT * FROM member;

-- Event

DROP TABLE IF EXISTS event;

CREATE TABLE event (
    id varchar(255) NOT NULL UNIQUE,
    name varchar(255),
    desc varchar(255),
    date varchar(255),
    location varchar(255),
    photo_url varchar(255)
);

INSERT INTO event (
    id,
    name,
    desc,
    date,
    location,
    photo_url
) VALUES (
    '1',
    'Default event',
    'Default event description',
    'July 4, 2018. 2:00pm - 4:00pm',
    'Trottier 0100',
    'https://chiefexecutive.net/wp-content/uploads/2018/02/GettyImages-870184586-compressor.jpg'
);

SELECT * FROM event;

-- Registration 

DROP TABLE IF EXISTS registration;

CREATE TABLE registration (
    id varchar(255) NOT NULL UNIQUE,
    event_id varchar(255),
    member_id varchar(255),
    signed_in boolean
);

INSERT INTO registration (
    id,
    event_id,
    member_id,
    sign_in
) VALUES (
    '1',
    '1',
    '1',
    false
);

SELECT * FROM registration;