CREATE TABLE [dbo].[Beer] (
    [Id]    INT            IDENTITY (1, 1) NOT NULL,
    [BeerId]    INT       NULL,
    [Name]         NVARCHAR (100)  NULL,
    [Tag_Line]  NVARCHAR (500) NULL,
    [First_Brewed]   NVARCHAR (500) NULL,
    [Abv]   NVARCHAR (500) NULL,
    [Email]   NVARCHAR (500) NULL,
    [CreatedDate]  DATETIME       NULL,
    [ModifiedDate] DATETIME       NULL
);
    