CREATE PROCEDURE getTask(
@task varchar (25))
AS 
SELECT TOP 1 * FROM project.tasks
	WHERE task = @task

GO