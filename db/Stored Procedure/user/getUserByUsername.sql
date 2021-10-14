CREATE PROCEDURE getUserByUsername 
(@username varchar(200))
AS
BEGIN
SELECT * FROM users.users_list WHERE username = @username AND  isdeleted = 0
END