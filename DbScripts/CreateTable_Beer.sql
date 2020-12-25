--Create Table Script
CREATE TABLE [dbo].[Beer] (
    [BeerId] INT IDENTITY (1, 1) NOT NULL,
    [Id] INT NULL,
    [Name] NVARCHAR (100)  NULL,
    [TagLine] NVARCHAR (500) NULL,
    [First_Brewed]   NVARCHAR (500) NULL,
    [Abv]   NVARCHAR (500) NULL,
    [image_url]   NVARCHAR (500) NULL,
    [Email]   NVARCHAR (500) NULL,
    [CreatedDate]  DATETIME NULL,
    [ModifiedDate] DATETIME NULL,
    [CurrentPageIndex] INT NULL,
    [PageCount] INT NULL,
    [checkboxAnswer] BIT null
);

--Sample Insert Scripts
INSERT INTO BEER([Id], [Name],[TagLine],[First_Brewed],[Abv] ,[image_url], [Email] , [CreatedDate],[ModifiedDate],[CurrentPageIndex],[PageCount],[checkboxAnswer])
VALUES(1,'Avery Brown Dredge','Bloggers','02/2011','7.2','imgurl1','abc@gmail.com',GETDATE(),GETDATE(),1,10,0)

INSERT INTO BEER([Id], [Name],[TagLine],[First_Brewed],[Abv] ,[image_url], [Email] , [CreatedDate],[ModifiedDate],[CurrentPageIndex],[PageCount],[checkboxAnswer])
VALUES(2,'india','Blogger','03/2018','6.8','imgurl2','aaa@gmail.com',GETDATE(),GETDATE(),1,10,1)


INSERT INTO BEER([Id], [Name],[TagLine],[First_Brewed],[Abv] ,[image_url], [Email] , [CreatedDate],[ModifiedDate],[CurrentPageIndex],[PageCount],[checkboxAnswer])
VALUES(3,'india','Blogger','03/2019','6.8','imgurl2','aaa@gmail.com',GETDATE(),GETDATE(),1,10,1)