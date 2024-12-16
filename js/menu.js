document.addEventListener('DOMContentLoaded', function() {
    const menuData = {
        entradas: [
            {
                nombre: "Ostiones al Pil Pil con Espuma de Ají Cacho de Cabra",
                descripcion: "Ostiones salteados en aceite de oliva y ajo, servidos con una espuma suave de ají cacho de cabra.",
                precio: "$9.000",
                imagen: "https://via.placeholder.com/400x300/c8a97e/ffffff?text=Ostiones",
                etiquetas: ["Mariscos", "Picante Suave"]
            },
            {
                nombre: "Tártaro de Salmón con Palta y Pebre de Cochayuyo",
                descripcion: "Fresco tártaro de salmón chileno con dados de palta y un pebre a base de cochayuyo para un toque marino.",
                precio: "$8.500",
                imagen: "https://via.placeholder.com/400x300/c8a97e/ffffff?text=Tartaro",
                etiquetas: ["Sin Gluten", "Pescados"]
            },
            {
                nombre: "Empanadas de Jaiba con Salsa de Merquén",
                descripcion: "Masa crocante rellena de jaiba desmenuzada, acompañada de una salsa de yogur y merquén.",
                precio: "$6.500",
                imagen: "https://via.placeholder.com/400x300/c8a97e/ffffff?text=Empanadas",
                etiquetas: ["Mariscos"]
            },
            {
                nombre: "Chupe de Centolla en Porciones Individuales",
                descripcion: "Tradicional chupe de centolla con un toque de queso parmesano gratinado, servido en pequeñas cazuelas de greda.",
                precio: "$10.000",
                imagen: "https://via.placeholder.com/400x300/c8a97e/ffffff?text=Chupe",
                etiquetas: ["Especialidad", "Mariscos"]
            }
        ],
        principales: [
            {
                nombre: "Congrio Frito con Puré de Papa Chilote",
                descripcion: "Filete de congrio frito servido sobre un puré cremoso de papas nativas de Chiloé, acompañado de una salsa verde a base de cilantro.",
                precio: "$13.000",
                etiquetas: ["Pescados", "Especialidad"]
            },
            {
                nombre: "Cordero Patagónico a Baja Temperatura",
                descripcion: "Suave cordero cocinado lentamente con hierbas sureñas, servido con un ragú de mote y verduras asadas al rescoldo.",
                precio: "$18.000",
                etiquetas: ["Especialidad", "Carnes"]
            },
            {
                nombre: "Charquicán de Quínoa",
                descripcion: "Moderno charquicán preparado con quínoa y vegetales frescos, coronado con un huevo pochado.",
                precio: "$10.500",
                etiquetas: ["Vegetariano", "Saludable"]
            },
            {
                nombre: "Salmón Austral con Crocante",
                descripcion: "Salmón rosado cubierto con un crocante de avellanas del sur, servido con una reducción de vino pipeño y papines al merkén.",
                precio: "$16.000",
                etiquetas: ["Pescados", "Especialidad"]
            },
            {
                nombre: "Plateada al Jugo",
                descripcion: "Plateada de vacuno cocinada a fuego lento con su jugo natural, acompañada de un puré rústico y chucrut de betarraga.",
                precio: "$14.000",
                etiquetas: ["Carnes", "Tradicional"]
            }
        ],
        postres: [
            {
                nombre: "Mil Hojas con Manjar de Huentelauquén",
                descripcion: "Capas de masa hojaldre crujiente con manjar artesanal, acompañadas de helado de chirimoya alegre.",
                precio: "$6.000",
                imagen: "https://via.placeholder.com/400x300/c8a97e/ffffff?text=MilHojas",
                etiquetas: ["Dulce", "Favorito"]
            },
            // ...Añadir resto de postres...
        ],
        bebidas: [
            {
                nombre: "Pisco Sour con Rica Rica",
                descripcion: "Refrescante pisco sour preparado con limón fresco y un toque de hierbas del norte de Chile.",
                precio: "$5.500",
                etiquetas: ["Cóctel", "Especialidad"]
            },
            {
                nombre: "Chicha Artesanal",
                descripcion: "Chicha dulce artesanal servida fría para resaltar su sabor tradicional.",
                precio: "$4.500",
                etiquetas: ["Tradicional"]
            },
            {
                nombre: "Agua de Hierbas Frescas",
                descripcion: "Infusión fría de hierbas locales como menta, cedrón y boldo, servida con un toque de miel.",
                precio: "$3.000",
                etiquetas: ["Sin Alcohol", "Saludable"]
            }
            // ...más bebidas...
        ],
        degustacion: [
            {
                nombre: "Menú Degustación Completo",
                descripcion: "Experiencia completa de 5 tiempos que incluye: entrada, plato intermedio, principal, postre y bebida a elección.",
                precio: "$35.000",
                imagen: "https://via.placeholder.com/400x300/c8a97e/ffffff?text=Degustacion",
                etiquetas: ["Premium", "Experiencia Completa"],
                detalles: [
                    "Tártaro de salmón con pebre de cochayuyo",
                    "Chupe de centolla",
                    "Cordero patagónico o salmón austral (a elección)",
                    "Crema de lúcuma con crocante de algarrobo",
                    "Pisco sour o vino del Valle del Maule"
                ]
            }
        ]
    };

    // Función mejorada para renderizar items
    function renderMenuItems(categoria) {
        const items = menuData[categoria] || [];
        const container = document.querySelector(`[data-category="${categoria}"] .menu-items-grid`);
        
        if (!container) return;

        container.innerHTML = items.map(item => `
            <div class="menu-item">
                <h3>${item.nombre}</h3>
                <p class="menu-item-description">${item.descripcion}</p>
                <div class="price">${item.precio}</div>
                <div class="diet-labels">
                    ${item.etiquetas ? item.etiquetas.map(tag => `
                        <span class="diet-label">${tag}</span>
                    `).join('') : ''}
                </div>
            </div>
        `).join('');
    }

    // Inicializar menú
    Object.keys(menuData).forEach(categoria => renderMenuItems(categoria));

    // Manejo de categorías
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const categoria = button.dataset.category;
            
            // Actualizar botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Mostrar/ocultar secciones
            menuSections.forEach(section => {
                if (categoria === 'todo' || section.dataset.category === categoria) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Mostrar todo por defecto
    document.querySelector('[data-category="todo"]').click();
});
