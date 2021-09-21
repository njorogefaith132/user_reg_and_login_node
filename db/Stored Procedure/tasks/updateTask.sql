CREATE PROCEDURE updateTask(
@taskid int,
@task varchar (25))
AS 
UPDATE project.tasks set 
	task = @task
	WHERE task_id = @taskid

GO