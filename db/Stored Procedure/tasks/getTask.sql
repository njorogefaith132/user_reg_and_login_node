CREATE PROCEDURE getTask(
@task varchar (25))
AS 
BEGIN
SELECT TOP 1 * FROM project.tasks
	WHERE task = @task
END
GO