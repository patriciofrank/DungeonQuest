class Character {
	constructor(chNombre) {
		this.chNombre = chNombre;
		this.chRaza;
		this.chImg;
		this.chClase;
		this.vitalidad = 10;
		this.magia = 10;
		this.fuerza = 10;
		this.agilidad = 10;
		this.vida=this.vitalidad*20
        this.golpeF=this.fuerza*15
        this.golpeM=this.magia*15
	}

	setRazaMods() {
		switch (this.chRaza) {
			case "Enano":
                this.vitalidad = this.vitalidad+3;
                this.magia = this.magia-5;
                this.fuerza = this.fuerza+3;
                this.agilidad = this.agilidad-1;
				break;
			case "Elfo":
                this.vitalidad = this.vitalidad-2;
                this.magia = this.magia+2;
                this.fuerza = this.fuerza-2;
                this.agilidad = this.agilidad+2;
				break;
			case "Humano":
                this.vitalidad = this.vitalidad;
                this.magia = this.magia;
                this.fuerza = this.fuerza;
                this.agilidad = this.agilidad;
				break;
			case "Gnomo":
                this.vitalidad = this.vitalidad-3;
                this.magia = this.magia+4;
                this.fuerza = this.fuerza-5;
                this.agilidad = this.agilidad+4;
				break;
		}
	}
	setClaseMods() {
		switch (this.chClase) {
			case "Guerrero":
                this.vitalidad = this.vitalidad+10;
                this.magia = this.magia-10;
                this.fuerza = this.fuerza+10;
				break;
			case "Mago":
                this.vitalidad = this.vitalidad-2;
                this.magia = this.magia+9;
                this.fuerza = this.fuerza-2;
                this.agilidad = this.agilidad+5;
				break;
			case "Paladin":
                this.vitalidad = this.vitalidad+3;
                this.magia = this.magia+2;
                this.fuerza = this.fuerza+3;
                this.agilidad = this.agilidad+2;
				break;
			case "Asesino":
                this.agilidad = this.agilidad+10;
				break;
		}
	}
}
