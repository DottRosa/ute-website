# DETTAGLI TECNICO-IMPLEMENTATIVI

## PAGINE

#### Corsi

* Barra di ricerca

* Filtro per durata (annuale, breve, serale)

* Filtro per tipologia
    * arte
    * attività motorie
    * benessere psicologico
    * cucina
    * fai da te
    * informatica
    * laboratori artistici
    * laboratori linguistici
    * laboratori teatrali
    * letteratura
    * lingue
    * musica e cinema
    * scienze umanistiche e sociali
    * storia
    * vari

* Inizialmente in ordine alfabetico

* Si prendono tutti i corsi dal DB e se ne mostrano solo 10-15, così non si carica troppo l'html. Per navigare si usa una barra con le pagine. Quando si applica un filtro si richiama la pagina stessa con in get le info necessarie per una nuova interrogazione che restituisce i corsi scelti.

#### Singolo corso

* Riceve in get l'id del corso selezionato nella pagina "Corsi" e reperisce le informazioni

#### Docenti

* In ordine alfabetico con proprio ruolo (fiorista, ecc)



## BACKOFFICE

#### Creazione nuovo piano annuale

Richiede l'inserimento di tutti i corsi. Verranno dati dei suggerimenti a partire dai corsi dell'anno precedente

#### Modifica corso (relativo al piano attuale già in vigore)

#### Creazione nuove news

#### Creazione eventi

#### Creazione gite

#### Diritto all'oblio (se vogliono eliminare un account, bisogna poterlo fare senza avere ripercussioni)


## BACKOFFICE (per noi)

#### Log delle attività di chi inserisce i dati: che operazioni ha fatto e quando


## DATABASE

Tre tabelle per i corsi divisi in base alla durata (Annuali, Brevi, Serali). 

(Ogni corso ha un id nel formato: abcdef1234) --> Perchè? Non basta usare un id con autoincrement?
