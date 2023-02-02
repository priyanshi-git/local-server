document.getElementById("getApi").addEventListener("click", getApi);
const url = "http://localhost:3000/list_students";
function getApi() {
  var StudName = document.getElementById("rollno").value;
  console.log(StudName);
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let output = `
            <div>
                <div style="color:black; width:10rem; background-color:white; border-radius: 10px;" class="p-3">        
                    <p class="m-0" style="font-width:bold; font-size:2rem;">${
                      data[StudName - 1].name
                    }</p>
                </div>
            </div>
            `;
      console.log("printing data", data);
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
