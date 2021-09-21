CREATE PROCEDURE deleteTask(
@task varchar (25))
AS 
DELETE FROM project.tasks 
	WHERE task = @task 
GO