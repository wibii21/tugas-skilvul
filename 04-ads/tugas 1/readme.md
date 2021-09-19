```
STORE "Besar_temperatur"without any value
STORE "Tipe_temperature"without any value

IF Tipe_temperature is "Celcius" THEN
DISPLAY Besar_temperatur
ELSE IF Tipe_temperature is "Fahrenheit" THEN
SET result (Besar_temperature - 32.0) * (5.0 / 9.0) THEN
DISPLAY result
ELSE IF Tipe_temperature is "Kelvin" THEN
SET result Besar_temperature - 273,15
DISPLAY result

ENDIF
```
