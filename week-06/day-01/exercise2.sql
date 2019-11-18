create schema `Todo`;

CREATE TABLE `database1`.`todo` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `List_name` VARCHAR(45) NULL,
  `Is_finished` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE);
  
INSERT INTO `database1`.`todo` (`List_name`) VALUES ('test');

select ID,List_name,Is_finished 
from database1.todo
where List_name = 'test';

update database1.todo 
set Is_finished = 1
where ID = 1;

delete from `database1`.`todo` 
where ID =1 ;


  
  
  

