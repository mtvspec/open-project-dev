# Сообщения
CREATE TABLE chat.e_messages
(
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES sysinfo.users(id),
	message_text TEXT NOT NULL,
	send_date TIMESTAMP WITH TIME ZONE DEFAULT LOCALTIMESTAMP NOT NULL
);

# Метаданные

CREATE TABLE metainfo.log
(
	id INTEGER PRIMARY KEY,
	object_id INTEGER NOT NULL REFERENCES metainfo.objects(id),
	session_id INTEGER NOT NULL REFERENCES 
);

# Пользователи
CREATE TABLE sysinfo.e_users
(
	id SERIAL PRIMARY KEY,
	username VARCHAR(20) NOT NULL UNIQUE,
	password VARCHAR(20) NOT NULL
);

# Сессии
#
CREATE TABLE sysinfo.e_sessions
(
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES sysinfo.e_users(id),
	open_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT LOCALTIMESTAMP,
	close_date TIMESTAMP WITH TIME ZONE,
	status_id INTEGER NOT NULL REFERENCES sysinfo.d_session_status(id)
);

# Справочник "Роли"

CREATE TABLE sysinfo.d_user_roles
(
	id SERIAL PRIMARY KEY,
	role_name VARCHAR(50) NOT NULL UNIQUE
);

# Роли

CREATE TABLE sysinfo.r_user_roles
(
	id SERIAL PRIMARY KEY,
	role_id INTEGER NOT NULL REFERENCES sysinfo.d_user_roles(id),
	user_id INTEGER NOT NULL REFERENCES sysinfo.e_users(id)
);

# Задачи
# Created
CREATE TABLE open_project.e_tasks
(
	id SERIAL PRIMARY KEY,
	task_name VARCHAR(200) NOT NULL UNIQUE,
	task_description TEXT UNIQUE,
	create_date TIMESTAMP WITH TIME ZONE DEFAULT LOCALTIMESTAMP NOT NULL
);

# История изменения задач
# 
CREATE TABLE history.e_tasks
(
	id SERIAL PRIMARY KEY,
	task_id INTEGER NOT NULL REFERENCES open_project.e_tasks(id),
	task_name VARCHAR(200) NOT NULL UNIQUE,
	task_description TEXT UNIQUE,
	modification_date TIMESTAMP WITH TIME ZONE DEFAULT LOCALTIMESTAMP NOT NULL,
	is_deleted INTEGER NOT NULL DEFAULT 0 CHECK (is_deleted in (0,1))
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