CREATE PROCEDURE postTask(

@projectname varchar(200)
,@start_date date
,@end_date date
,@task varchar (25))
AS
BEGIN
SELECT * FROM  project.project_list WHERE project_name = @projectname;

	
	 if (@@ROWCOUNT = 1)
	 BEGIN
	 INSERT into project.tasks
		(project_name, task, start_date, end_date)
		VALUES
		(@projectname, @task,@start_date, @end_date)

	 END
	 else
	 BEGIN
	 print 'Project does not exist';
	 END


END
