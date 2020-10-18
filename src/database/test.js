const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2195668",
    lng: "-49.6617456",
    name: "Lar das meninas",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "11 9999-9999",
    images: [
      "http://127.0.0.1:5500/images/1.JPEG",
      "http://127.0.0.1:5500/images/2.JPEG",
      "http://127.0.0.1:5500/images/3.JPEG",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orfanato pelo id
  /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  console.log(orphanage)

  //deletar dado da tabela
  console.log (await db.run("DELETE FROM orphanages WHERE id = '4'"))
  console.log (await db.run("DELETE FROM orphanages WHERE id = '5'"))*/
});
