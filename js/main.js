// aggiungo data
new Vue({
	el:'#root',
	data:{
		contacts: [ 
			{
				name: 'Michele',
				avatar: 'img/avatar_1.jpg',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Hai portato a spasso il cane?',
						status: 'sent'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Ricordati di stendere i panni',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						message: 'Tutto fatto!',
						status: 'received'
					} 
				],
			},
			{
				name: 'Samuele',
				avatar: 'img/avatar_3.jpg',
				visible: true,
				messages: 
				[
					{
						date: '28/03/2020 10:10:40',
						message: 'La Marianna va in campagna',
						status: 'received'
					}, 
					{
						date: '28/03/2020 10:20:10',
						message: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
			
					}, 
					{
						date: '28/03/2020 16:15:22',
						message: 'Ah scusa!',
						status: 'received'
			
					} 
				],
			}, 
			{
				name: 'Alessandro B.',
				avatar: 'img/avatar_4.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Si, ma preferirei andare al cinema',
						status: 'received'			
					} 
				],
			}, 
			{
				name: 'Alessandro L.',
				avatar: 'img/avatar_5.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ricordati di chiamare la nonna',
						status: 'sent'		
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Va bene, stasera la sento',
						status: 'received'
			
					}
				],
			}, 
			{
				name: 'Claudia',
				avatar: 'img/avatar_6.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao Claudia, hai novità?',
						status: 'sent'		
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Non ancora',
						status: 'received'			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'Nessuna nuova, buona nuova',
						status: 'sent'			
					}, 
				],
			}, 
			{
				name: 'Federica',
				avatar: 'img/avatar_7.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Fai gli auguri a Martina che è il suo compleanno!',
						status: 'sent'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Grazie per avermelo ricordato, le scrivo subito!',
						status: 'received'			
					}
				],
			}, 
			{
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received'
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent'
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received'
					}
				],
			},
            
		],
		selectIndex:0,
		newMex:'',
		newName:'',
		
	},
    // aggiungo methods
    methods:{
		selectedChat(index){
			this.selectIndex=index;
		},
		addMex(){
			if(this.newMex){
				this.contacts[this.selectIndex].messages.push({
					date:'',
					message:this.newMex,
					status:'sent',
				})
				this.newMex='';	
				risposta={
					date:'',
					message:'OK',
					status:'received',
				};
				setTimeout(() => this.contacts[this.selectIndex].messages.push(risposta), 1000);			
			}
			
		},
		comparaNomi(){
			this.contacts.forEach((ele,i)=>{
					if (this.newName !== this.contacts[i].name.toLowerCase().slice(0, this.newName.length)) {
						this.contacts[i].visible = false;
					} else {
						this.contacts[i].visible = true;
					}
				});
			}
		},

	});
	