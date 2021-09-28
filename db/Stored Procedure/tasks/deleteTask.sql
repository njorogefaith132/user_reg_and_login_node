CREATE PROCEDURE deleteTask(
@task varchar (25))
AS 
BEGIN
DELETE FROM project.tasks 
	WHERE task = @task
END 
GO