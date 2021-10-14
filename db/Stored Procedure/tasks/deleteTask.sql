CREATE PROCEDURE deleteTask(
@task varchar (25))
AS 
BEGIN
UPDATE project.tasks SET isdeleted = 1
	WHERE task = @task
END
GO
