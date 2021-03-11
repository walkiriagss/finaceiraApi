CREATE TABLE transacoes
(
    id serial NOT NULL,
    tipo varchar(30) NOT NULL,
    data varchar(30) NOT NULL,
    categoria varchar(30),
    valor float(30) NOT NULL,
    PRIMARY KEY (id)
);
