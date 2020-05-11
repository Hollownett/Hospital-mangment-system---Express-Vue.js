ALTER TABLE public.medBooksss
    ADD COLUMN desiase "char";

ALTER TABLE public.medBooks
    ADD COLUMN fee integer;

ALTER TABLE public.medBooks
    ADD COLUMN recipe "char";

ALTER TABLE public.books
    ADD COLUMN "birthDate" date;
ALTER TABLE public.patients
    ADD COLUMN address character varying;