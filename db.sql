# Сообщения
CREATE TABLE chat.e_messages
(
	id 								SERIAL PRIMARY KEY,
	user_id 					INTEGER NOT NULL REFERENCES sysinfo.users(id),
	message_text 			TEXT NOT NULL,
	send_date 				TIMESTAMP WITH TIME ZONE DEFAULTS LOCALTIMESTAMP NOT NULL 
);