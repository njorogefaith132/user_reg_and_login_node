CREATE PROCEDURE postTask(

@projectid int,
@task varchar (25))
AS
BEGIN
SELECT * FROM  project.project_list WHERE project_id = @projectid;

	
	 if (@@ROWCOUNT = 1)
	 BEGIN
	 INSERT into project.tasks
		(project_id, task, date_added)
		VALUES
		(@projectid, @task,CAST(GETDATE() AS DATE))

	 END
	 else
	 BEGIN
	 print 'Project does not exist';
	 END


END
