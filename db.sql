# Сообщения
CREATE TABLE chat.e_messages
(
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES sysinfo.users(id),
	message_text TEXT NOT NULL,
	send_date TIMESTAMP WITH TIME ZONE DEFAULT LOCALTIMESTAMP NOT NULL
);

# Задачи
# Created
CREATE TABLE open_project.e_tasks
(
	id SERIAL PRIMARY KEY,
	task_name VARCHAR(200) NOT NULL UNIQUE,
	task_description TEXT NOT NULL UNIQUE,
	create_date TIMESTAMP WITH TIME ZONE DEFAULT LOCALTIMESTAMP NOT NULL
);

# Схема для хранения справочников
# Created
CREATE SCHEMA dict;

# Справочник "Пол физического лица"
# Created
CREATE TABLE dict.gender
(
	id SMALLINT[1] PRIMARY KEY,
	gender VARCHAR(100) NOT NULL UNIQUE
);

# Схема для хранения метаданных
# Created
CREATE SCHEMA metainfo;

# Физические лица
# Created
CREATE TABLE metainfo.e_persons
(
	id SERIAL PRIMARY KEY,
	iin NUMERIC(12, 0) NOT NULL UNIQUE,
	first_name VARCHAR(200) NOT NULL,
	last_name VARCHAR(200) NOT NULL,
	middle_name VARCHAR(300),
	dob DATE NOT NULL,
	gender_id SMALLINT[1] NOT NULL REFERENCES dict.gender(id)
);