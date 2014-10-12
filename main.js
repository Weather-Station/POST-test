
$(document).ready(
  function(){
    $("#device_id").val("1");
    $("#device_token").val("73e5675264");
  }
)

function compileRequest(){

  pressure = $("#pressure").val();

  temp = $("#pressure").val();
  hum = $("#humidity").val();
  wind_sp = $("#wind_speed").val();
  wind_di = $("#wind_direction").val();
  rain = $("#rainfall").val();
  light = $("#light_level").val();
  batt = $("#battery_level").val();
  record_time = $("#record_time").val();
  device_token = $("#device_token").val();
  return {"token":device_token,"pressure":pressure, "temperature":temp,"humidity":hum,"wind_speed":wind_sp,"wind_direction":wind_di,"rainfall":rain,"light_level":light,"battery_level":batt,"record_time":record_time};

}
function sendRequest(){
  request_data = compileRequest();
  device_id = $("#device_id").val();
  request_dest = "http://localhost:3000/devices/"+device_id+"/reports";
  console.log(request_data);
  $.ajax({
    type: "POST",
    url: request_dest,

    data: request_data,
    success: onSuccess
  });

}
function onSuccess(data,text_status,xhr){
  alert(text_status);

}
function bindActions(){
  $('#submit').click(sendRequest());
}
