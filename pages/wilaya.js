let wilayas = [
    {"id":"1","code":"1","name":"Adrar", "ar_name":"أدرار", "daira":"11", "commune":"16"}, 
    {"id":"2","code":"2","name":"Chlef", "ar_name":"الشلف", "daira":"13", "commune":"35"}, 
    {"id":"3","code":"3","name":"Laghouat", "ar_name":"الأغواط", "daira":"10", "commune":"24"}, 
    {"id":"4","code":"4","name":"OumElBouaghi", "ar_name":"أم البواقي", "daira":"12", "commune":"29"},
    {"id":"5","code":"5","name":"Batna", "ar_name":"باتنة", "daira":"21", "commune":"61"},
    {"id":"6","code":"6","name":"Béjaïa", "ar_name":"بجاية", "daira":"19", "commune":"62"},
    {"id":"7","code":"7","name":"Biskra", "ar_name":"بسكرة", "daira":"12", "commune":"27"},
    {"id":"8","code":"8","name":"Bechar", "ar_name":"بشار", "daira":"12", "commune":"11"},
    {"id":"9","code":"9","name":"Blida", "ar_name":"البليدة", "daira":"10", "commune":"25"},
    {"id":"10","code":"10","name":"Bouira", "ar_name":"البويرة", "daira":"12", "commune":"45"},
    {"id":"11","code":"11","name":"Tamanrasset", "ar_name":"تمنراست", "daira":"7", "commune":"5"},
    {"id":"12","code":"12","name":"Tbessa", "ar_name":"تبسة", "daira":"12", "commune":"28"},
    {"id":"13","code":"13","name":"Tlemcen", "ar_name":"تلمسان", "daira":"20", "commune":"53"},
    {"id":"14","code":"14","name":"Tiaret", "ar_name":"تيارت", "daira":"14", "commune":"42"},
    {"id":"15","code":"15","name":"Tizi Ouzou", "ar_name":"تيزي وزو", "daira":"21", "commune":"67"},
    {"id":"16","code":"16","name":"Alger", "ar_name":"الجزائر", "daira":"13", "commune":"57"},
    {"id":"17","code":"17","name":"Djelfa", "ar_name":"الجلفة", "daira":"12", "commune":"36"},
    {"id":"18","code":"18","name":"Jijel", "ar_name":"جيجل", "daira":"11", "commune":"28"},
    {"id":"19","code":"19","name":"Setif", "ar_name":"سطيف", "daira":"20", "commune":"60"},
    {"id":"20","code":"20","name":"Saida", "ar_name":"سعيدة", "daira":"6", "commune":"16"},
    {"id":"21","code":"21","name":"Skikda", "ar_name":"سكيكدة", "daira":"13", "commune":"38"},
    {"id":"22","code":"22","name":"Sidi Bel Abbes", "ar_name":"سيدي بلعباس", "daira":"15", "commune":"52"},
    {"id":"23","code":"23","name":"Annaba", "ar_name":"عنابة", "daira":"6", "commune":"12"},
    {"id":"24","code":"24","name":"Guelma", "ar_name":"قالمة", "daira":"10", "commune":"34"},
    {"id":"25","code":"25","name":"Constantine", "ar_name":"قسنطينة", "daira":"6", "commune":"12"},
    {"id":"26","code":"26","name":"Medea", "ar_name":"المدية", "daira":"19", "commune":"64"},
    {"id":"27","code":"27","name":"Mostaganem", "ar_name":"مستغانم", "daira":"10", "commune":"32"},
    {"id":"28","code":"28","name":"M'Sila", "ar_name":"المسيلة", "daira":"15", "commune":"47"},
    {"id":"29","code":"29","name":"Mascara", "ar_name":"معسكر", "daira":"16", "commune":"47"},
    {"id":"30","code":"30","name":"Ouargla", "ar_name":"ورقلة", "daira":"10", "commune":"8"},
    {"id":"31","code":"31","name":"Oran", "ar_name":"وهران", "daira":"9", "commune":"26"},
    {"id":"32","code":"32","name":"El Bayadh", "ar_name":"البيض", "daira":"8", "commune":"22"},
    {"id":"33","code":"33","name":"Illizi", "ar_name":"إليزي", "daira":"3", "commune":"4"},
    {"id":"34","code":"34","name":"BBA", "ar_name":"برج بوعريريج", "daira":"10", "commune":"34"},
    {"id":"35","code":"35","name":"Boumerdes", "ar_name":"بومرداس", "daira":"9", "commune":"32"},
    {"id":"36","code":"36","name":"El Tarf", "ar_name":"الطارف", "daira":"7", "commune":"24"},
    {"id":"37","code":"37","name":"Tindouf", "ar_name":"تندوف", "daira":"1", "commune":"2"},
    {"id":"38","code":"38","name":"Tissemsilt", "ar_name":"تيسمسيلت", "daira":"8", "commune":"22"},
    {"id":"39","code":"39","name":"El Oued", "ar_name":"الوادي", "daira":"12", "commune":"22"},
    {"id":"40","code":"40","name":"Khenchela", "ar_name":"خنشلة", "daira":"8", "commune":"21"},
    {"id":"41","code":"41","name":"Souk Ahras", "ar_name":"سوق أهراس", "daira":"10", "commune":"26"},
    {"id":"42","code":"42","name":"Tipaza", "ar_name":"تيبازة", "daira":"10", "commune":"28"},
    {"id":"43","code":"43","name":"Mila", "ar_name":"ميلة", "daira":"13", "commune":"32"},
    {"id":"44","code":"44","name":"Ain Defla", "ar_name":"عين الدفلى", "daira":"14", "commune":"36"},
    {"id":"45","code":"45","name":"Naama", "ar_name":"النعامة", "daira":"7", "commune":"12"},
    {"id":"46","code":"46","name":"Temouchent", "ar_name":"عين تموشنت", "daira":"8", "commune":"28"},
    {"id":"47","code":"47","name":"Ghardaefa", "ar_name":"غرداية", "daira":"9", "commune":"13"},
    {"id":"48","code":"48","name":"Relizane", "ar_name":"غليزان", "daira":"13", "commune":"38"}
    ]
wilaya = document.querySelector('.wilayas');

console.log(wilayas.length);


for (let i = 0; i < wilayas.length; i++) {
    wilaya.innerHTML += ` 
    <div class="wilaya">
                <img src="../images/wilaya/${i + 1}.png">
                <p>wilaya de ${wilayas[i].name}</p>
                <a href="">see more <i class="fas fa-arrow-right"></i></a>
                <div class="table">
                    <div class="code">
                        <p>code</p>
                        <h1>${i + 1}</h1>
                    </div>
                    <div class="code">
                        <p>dairas</p>
                        <h1>${wilayas[i].daira}</h1>
                    </div>
                    <div class="code">
                        <p>communes</p>
                        <h1>${wilayas[i].commune}</h1>
                    </div>
                </div>
            </div>
    `;
}


