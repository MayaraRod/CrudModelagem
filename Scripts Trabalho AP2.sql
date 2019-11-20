create database crud_estoque;
use crud_estoque;
create table produtos (
   id int primary key auto_increment,
   nome varchar(100),
   descricao varchar(200),
   quantidadeEstoque int(4)
);
insert into produtos (nome, descricao, quantidadeEstoque) values
('Blusa masculina','Blusa masculina social manga longa' ,'100'),
('Blusa feminina','Blusa feminina despojada' ,'70'),
('Calça jeans feminina','Calça jeans feminina skinny' ,'50'),
('Calça jeans feminina','Calça jeans feminina boca de sino' ,'40'),
('Calça jeans masculina','Calça jeans masculina desbotada' ,'50'),
('Calça jeans masculina','Calça jeans masculina não desbotada' ,'80'),
('Vestido','Vestido despojado curto floral' ,'60'),
('Vestido','Vestido despojado curto sem estampa' ,'90'),
('Blusa masculina','Blusa masculina polo' ,'150'),
('Saia jeans','Saia jeans longa','25'),
('Jaqueta masculina jeans','Jaqueta masculina jeans manga longa' ,'60'),
('Jaqueta feminina jeans','Jaqueta feminina jeans sem manga' ,'45'),
('Camiseta masculina','Camiseta masculina sem manga' ,'60'),
('Camiseta feminina','Camiseta feminina sem manga' ,'55');

select * from produtos;
select nome from produtos;
