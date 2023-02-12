(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [4948], {
        14948: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => ue
            });
            var i = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "jbg sign-in",
                    class: {
                        "has-recent": e.recentGames.length
                    }
                }, [s("TopBar", {
                    ref: "topBar",
                    attrs: {
                        twitch: e.twitch,
                        artifacts: e.artifacts
                    },
                    on: {
                        twitchLoginClick: e.onTwitchLoginClick,
                        twitchLogoutClick: e.onTwitchLogoutClick,
                        linkClick: e.onLinkClick
                    }
                }), e._v(" "), s("div", {
                    staticClass: "form"
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("form", {
                    attrs: {
                        autocomplete: "off"
                    }
                }, [s("fieldset", [s("label", {
                    attrs: {
                        name: "roomcode",
                        for: "roomcode",
                        type: "text"
                    }
                }, [e._v("\n                        " + e._s(e.$t("ENTRY.ROOM_CODE"))), s("span", {
                    staticClass: "status"
                }, [e._v(e._s(e.$t(e.formState.statusText)))])]), e._v(" "), s("Input", {
                    attrs: {
                        id: "roomcode",
                        type: "text",
                        autocapitalize: "off",
                        autocorrect: "off",
                        autocomplete: "off",
                        placeholder: e.$t("ENTRY.ROOM_CODE_PLACEHOLDER"),
                        maxlength: e.codeLength
                    },
                    on: {
                        input: e.onCodeInput
                    },
                    model: {
                        value: e.code,
                        callback: function(t) {
                            e.code = t
                        },
                        expression: "code"
                    }
                }), e._v(" "), e.room && e.warnings.length ? s("div", {
                    staticClass: "warnings"
                }, [e._l(e.warnings, (function(t) {
                    return ["flexbox" === t ? s("p", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.$t("STRING_STYLE_WARNING"),
                            expression: "$t('STRING_STYLE_WARNING')"
                        }],
                        key: t
                    }) : e._e(), e._v(" "), "canvas" === t ? s("p", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.$t("ERROR_UNSUPPORTED_BROWSER"),
                            expression: "$t('ERROR_UNSUPPORTED_BROWSER')"
                        }],
                        key: t
                    }) : e._e(), e._v(" "), "camera" === t ? s("p", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.$t("STRING_CAMERA_WARNING"),
                            expression: "$t('STRING_CAMERA_WARNING')"
                        }],
                        key: t
                    }) : e._e()]
                }))], 2) : e._e(), e._v(" "), s("label", {
                    attrs: {
                        name: "username",
                        for: "username",
                        type: "text"
                    }
                }, [e._v("\n                        " + e._s(e.$t("STRING_NAME"))), s("span", {
                    staticClass: "remaining"
                }, [e._v(e._s(e.nameLength - e.name.length))])]), e._v(" "), s("Input", {
                    attrs: {
                        id: "username",
                        type: "text",
                        autocapitalize: "off",
                        autocorrect: "off",
                        autocomplete: "off",
                        disabled: void 0 !== e.twitch.user,
                        placeholder: e.$t("STRING_NAME_PLACEHOLDER"),
                        maxlength: e.nameLength
                    },
                    on: {
                        input: e.onNameInput
                    },
                    model: {
                        value: e.name,
                        callback: function(t) {
                            e.name = t
                        },
                        expression: "name"
                    }
                }), e._v(" "), s("button", {
                    class: {
                        connecting: e.isConnecting, audience: "audience" === e.formState.joinAs
                    },
                    attrs: {
                        id: "button-join",
                        type: "submit",
                        disabled: !e.formState.isEnabled
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.connect(e.formState.joinAs)
                        }
                    }
                }, [s("span", [e._v(e._s(e.$t(e.formState.submitText)))]), e._v(" "), s("div", {
                    staticClass: "loading"
                })])], 1)]), e._v(" "), s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.$t("TOS_WARNING", {
                            submit: e.$t(e.formState.submitText)
                        }),
                        expression: "$t('TOS_WARNING', { submit: $t(formState.submitText) })"
                    }],
                    staticClass: "tos",
                    attrs: {
                        role: "complementary"
                    }
                }), e._v(" "), s("SlideBanner"), e._v(" "), e.recentGames.length ? e._e() : s("a", {
                    staticClass: "bottom-logo",
                    attrs: {
                        target: "_blank",
                        href: "https://www.jackboxgames.com/?utm_source=jackboxtv&utm_medium=logo&utm_campaign=jackboxgames"
                    }
                }, [e._v("\n                Link to Jackbox Games Homepage\n            ")])], 1)]), e._v(" "), e.recentGames.length ? s("div", {
                    staticClass: "recent"
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "top-items"
                }, [s("h3", [e._v("RECENT GAMES")]), e._v(" "), s("button", {
                    staticClass: "view-all",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onPastGamesClick.apply(null, arguments)
                        }
                    }
                }, [e._v("VIEW ALL")])]), e._v(" "), e._l(e.recentGames, (function(e) {
                    return s("PastGame", {
                        key: e.url,
                        staticClass: "home",
                        attrs: {
                            artifact: e
                        }
                    })
                })), e._v(" "), e.recentGames.length >= 3 ? s("a", {
                    staticClass: "more",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onPastGamesClick.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                View All Past Games\n            ")]) : e._e()], 2)]) : e._e()], 1)
            };
            i._withStripped = !0;
            var a, o = s(39666),
                n = s(13819),
                r = s(2934),
                _ = s.n(r),
                E = new Uint8Array(16);

            function u() {
                if (!a && !(a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return a(E)
            }
            const c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                l = function(e) {
                    return "string" == typeof e && c.test(e)
                };
            for (var R = [], S = 0; S < 256; ++S) R.push((S + 256).toString(16).substr(1));
            const d = function(e, t, s) {
                var i = (e = e || {}).random || (e.rng || u)();
                if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
                    s = s || 0;
                    for (var a = 0; a < 16; ++a) t[s + a] = i[a];
                    return t
                }
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        s = (R[e[t + 0]] + R[e[t + 1]] + R[e[t + 2]] + R[e[t + 3]] + "-" + R[e[t + 4]] + R[e[t + 5]] + "-" + R[e[t + 6]] + R[e[t + 7]] + "-" + R[e[t + 8]] + R[e[t + 9]] + "-" + R[e[t + 10]] + R[e[t + 11]] + R[e[t + 12]] + R[e[t + 13]] + R[e[t + 14]] + R[e[t + 15]]).toLowerCase();
                    if (!l(s)) throw TypeError("Stringified UUID is invalid");
                    return s
                }(i)
            };
            var T = s(44285),
                I = s(55507),
                N = s(81127),
                A = s(89768),
                h = s(12360),
                b = function(e, t, s, i) {
                    return new(s || (s = Promise))((function(a, o) {
                        function n(e) {
                            try {
                                _(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function r(e) {
                            try {
                                _(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function _(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(n, r)
                        }
                        _((i = i.apply(e, t || [])).next())
                    }))
                },
                G = s(21944),
                m = s(47865),
                O = s(2720);
            class p {
                constructor(e) {
                    m.K.shared.isSupported ? "/access_token" === (null == e ? void 0 : e.substr(0, 13)) && this.processRedirect(e) : console.warn("Twitch Login requires local storage")
                }
                prepare() {
                    return m.K.shared.isSupported ? (O.v.debug && (0, A.c)("[Twitch] prepare"), m.K.shared.get("token") ? this.fetchUser() : null) : null
                }
                login() {
                    if (!m.K.shared.isSupported) return;
                    (0, A.c)("[Twitch] login");
                    const e = d();
                    m.K.shared.set("twitchState", e);
                    const t = O.v.twitch.clientId;
                    let s = `https://${window.location.hostname}`;
                    "localhost" === window.location.hostname && (s = "http://localhost:9090/");
                    let i = "https://id.twitch.tv/oauth2/authorize";
                    i += `?client_id=${t}`, i += `&redirect_uri=${s}`, i += "&response_type=token", i += "&scope=user:read:email", i += `&state=${e}`, window.location.href = i
                }
                logout() {
                    m.K.shared.isSupported && ((0, A.c)("[Twitch] logout"), delete this.user, m.K.shared.remove("token"))
                }
                processRedirect(e) {
                    if (!m.K.shared.isSupported) return;
                    (0, A.c)("[Twitch] processRedirect", e);
                    const t = m.K.shared.get("twitchState");
                    if (!t) return void console.error("[Twitch] Could not find the expected state in local storage");
                    const s = e.substr(1).split("&"),
                        i = {};
                    for (let e = 0; e < s.length; e++) {
                        const [t, a] = s[e].split("=");
                        i[t] = a
                    }
                    i.state !== t && console.error("[Twitch] State parameter doesn't match the expected state"), m.K.shared.set("token", i.access_token), m.K.shared.remove("twitchState"), window.history.replaceState({}, document.title, "/")
                }
                fetchUser() {
                    return e = this, t = void 0, i = function*() {
                        if (!m.K.shared.isSupported) return null;
                        const e = m.K.shared.get("token");
                        if (!e) throw new Error("[Twitch] Token not found in local storage");
                        try {
                            const t = yield fetch("https://api.twitch.tv/helix/users", {
                                headers: {
                                    Authorization: `Bearer ${e}`,
                                    "Client-ID": O.v.twitch.clientId
                                }
                            }), s = yield t.json();
                            if (!s || !s.data) return null;
                            const i = s.data[0];
                            return i.token = e, this.user = i, this.user
                        } catch (e) {
                            return console.warn(e), null
                        }
                    }, new((s = void 0) || (s = Promise))((function(a, o) {
                        function n(e) {
                            try {
                                _(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function r(e) {
                            try {
                                _(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function _(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(n, r)
                        }
                        _((i = i.apply(e, t || [])).next())
                    }));
                    var e, t, s, i
                }
            }
            var v = s(89446),
                C = s(65853),
                g = s(6305);
            const U = {
                en: {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE COMO PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Se eliminarán el nombre, el avatar, las entradas y los dibujos de este jugador. ¿Quieres continuar?",
                    STRING_CENSOR_INFO: "pulsa <span class='censor-button-image censor-button-black'></span> para censurar al jugador el resto de la partida y eliminar sus respuestas, nombre y avatar (qué intenso)",
                    STRING_SKIP: "¡paso!",
                    STRING_THANK_YOU: "gracias por el dibujo",
                    STRING_DRAWING_OVER: "¡no se dibuja más!",
                    STRING_CENSOR_LIE_CONFIRM: "se eliminará la entrada de este jugador, así como todas sus entradas y dibujos futuros. ¿quieres continuar?",
                    STRING_YES: "Sí",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "¡gracias por participar, miembro del público!",
                    STRING_AUDIENCE_WELCOME_0: "bienvenido al público<br>¡es divertido!",
                    STRING_AUDIENCE_WELCOME_1: "bienvenido al público<br>enseguida podrás participar",
                    STRING_AUDIENCE_WELCOME_2: "bienvenido al público<br>enseguida empieza la fiesta",
                    STRING_AUDIENCE_WELCOME_3: "bienvenido al público<br>te estábamos esperando",
                    STRING_AUDIENCE_WELCOME_4: "bienvenido al público<br>no es tan divertido como jugar, pero es mejor que estar solo sin hacer nada",
                    STRING_AUDIENCE_WELCOME_5: "bienvenido al público<br>cuantos más, mejor",
                    STRING_AUDIENCE_WELCOME_6: "bienvenido al público<br>ya eres uno de nosotros",
                    STRING_AUDIENCE_WELCOME_7: "bienvenido al público<br>por favor, no comas nada crujiente durante el programa",
                    STRING_AUDIENCE_WELCOME_8: "bienvenido al público<br>ahora nos toca a nosotros",
                    STRING_AUDIENCE_WELCOME_9: "bienvenido al público<br>te gusta mirar, ¿eh?",
                    STRING_AUDIENCE_WELCOME_10: "bienvenido al público<br>ahora mismo no es que pase mucho, pero enseguida pillamos el ritmo",
                    STRING_AUDIENCE_WELCOME_11: "bienvenido al público<br>por favor, nada de montar motines, ¿eh?",
                    STRING_AUDIENCE_WELCOME_12: "bienvenido al público<br>siéntete como en casa",
                    STRING_AUDIENCE_WELCOME_13: "bienvenido al público<br>esperamos que te guste juzgar a la gente",
                    STRING_AUDIENCE_WELCOME_14: "bienvenido al público<br>respira hondo, en breve empieza lo bueno",
                    STRING_AUDIENCE_WELCOME_15: "bienvenido al público<br>que lo disfrutes",
                    STRING_AUDIENCE_WELCOME_16: "bienvenido al público<br>de todo el público, te preferimos a ti",
                    STRING_AUDIENCE_WELCOME_17: "bienvenido al público<br>¡los sueños se hacen realidad!",
                    STRING_AUDIENCE_WELCOME_18: "bienvenido al público<br>¡es la segunda forma más divertida de jugar a esto!",
                    STRING_AUDIENCE_WELCOME_19: "bienvenido al público<br>esta frase del guion va dedicada a ti",
                    STRING_AUDIENCE_WELCOME_20: "bienvenido al público<br>por favor, busca un asiento",
                    STRING_AUDIENCE_WELCOME_21: "bienvenido al público<br>bueeeeno, ¿qué te cuentas?",
                    STRING_AUTHOR_MESSAGE_0: "Este es tu dibujo.<br>Piensa en lo que has hecho.",
                    STRING_AUTHOR_MESSAGE_1: "Este es tu dibujo.<br>Quizá deberías ir al médico.",
                    STRING_AUTHOR_MESSAGE_2: "Este es tu dibujo.<br>En esto te has convertido.",
                    STRING_AUTHOR_MESSAGE_3: "Este es tu dibujo.<br>Este es tu diseño.",
                    STRING_AUTHOR_MESSAGE_4: "Este es tu dibujo.<br>¡Después de esto, solo cabe mejorar!",
                    STRING_AUTHOR_MESSAGE_5: "Este es tu dibujo.<br>Relájate.",
                    STRING_AUTHOR_MESSAGE_6: "Este es tu dibujo.<br>Disfruta del momento.",
                    STRING_AUTHOR_MESSAGE_7: "Este es tu dibujo.<br>Demasiado tarde para cambiarlo.",
                    STRING_AUTHOR_MESSAGE_8: "Este es tu dibujo.<br>No puedes echarle la culpa a nadie más.",
                    STRING_AUTHOR_MESSAGE_9: "Este es tu dibujo.<br>Y tu vida cambiará para siempre.",
                    STRING_AUTHOR_MESSAGE_10: "Este es tu dibujo.<br>¿Sí, vale?",
                    STRING_AUTHOR_MESSAGE_11: "Este es tu dibujo.<br>Sin comentarios.",
                    STRING_AUTHOR_MESSAGE_12: "Este es tu dibujo.<br>Podría ser peor.",
                    STRING_AUTHOR_MESSAGE_13: "Este es tu dibujo.<br>Esto es culpa tuya.",
                    STRING_AUTHOR_MESSAGE_14: "Este es tu dibujo.<br>Sí… Ajá…",
                    STRING_AUTHOR_MESSAGE_15: "Este es tu dibujo.<br>No pasa nada, pronto acabará todo.",
                    STRING_AUTHOR_MESSAGE_16: "Este es tu dibujo.<br>No te castigues demasiado por esto.",
                    STRING_AUTHOR_MESSAGE_17: "Este es tu dibujo.<br>Esto es arte.",
                    STRING_AUTHOR_MESSAGE_18: "Este es tu dibujo.<br>¿Gracias?",
                    STRING_AUTHOR_MESSAGE_19: "Este es tu dibujo.<br>¡Chócala!",
                    STRING_AUTHOR_MESSAGE_20: "Este es tu dibujo.<br>¿Por qué no duermes un poco?",
                    STRING_AUTHOR_MESSAGE_21: "Este es tu dibujo.<br>Tómatelo con filosofía.",
                    STRING_AUTHOR_MESSAGE_22: "Este es tu dibujo.<br>La vergüenza pasará.",
                    STRING_AUTHOR_MESSAGE_23: "Este es tu dibujo.<br>De psiquiatra.",
                    STRING_AUTHOR_MESSAGE_24: "Este es tu dibujo.<br>Asume las consecuencias.",
                    STRING_AUTHOR_MESSAGE_25: "Este es tu dibujo.<br>Ya está hecho.",
                    STRING_AUTHOR_MESSAGE_26: "¿Has dibujado esto?<br>Calma. Todo pasará.",
                    STRING_AUTHOR_MESSAGE_27: "Este es tu dibujo.<br>Bueno, alguien te querrá. Tal vez.",
                    STRING_AUTHOR_MESSAGE_28: "Este es tu dibujo.<br>Gracias.",
                    STRING_AUTHOR_MESSAGE_29: "Este es tu dibujo.<br>Madre mía.",
                    STRING_AUTHOR_MESSAGE_30: "Este es tu dibujo.<br>Ja. Ja. Ja. Ja.",
                    STRING_AUTHOR_MESSAGE_31: "Este es tu dibujo.<br>Te quiero por ello.",
                    STRING_AUTHOR_MESSAGE_32: "Este es tu dibujo.<br>Qué raro.",
                    STRING_AUTHOR_MESSAGE_33: "Este es tu dibujo.<br>Mientras te guste a ti…",
                    STRING_AUTHOR_MESSAGE_34: "Este es tu dibujo.<br>Oye, ¿alguna vez te has planteado si serás la única persona del universo? ¿Si todo lo demás… todos, todas las cosas, están en tu cabeza? ¿Eh?",
                    STRING_AUTHOR_MESSAGE_35: "Este es tu dibujo.<br>Para echar unas risas vale.",
                    STRING_AUTHOR_MESSAGE_36: "Este es tu dibujo.<br>No se te reconocerá hasta después de tu muerte.",
                    STRING_AUTHOR_MESSAGE_37: "Este es tu dibujo.<br>Aunque eso ya lo sabrás, claro.",
                    STRING_AUTHOR_MESSAGE_38: "Este es tu dibujo.<br>Ver para creer.",
                    STRING_AUTHOR_MESSAGE_39: "Este es tu dibujo.<br>La historia te juzgará.",
                    STRING_AUTHOR_MESSAGE_40: "Este es tu dibujo.<br>Disfrútalo.",
                    STRING_AUTHOR_MESSAGE_41: "Este es tu dibujo.<br>Está bien.",
                    STRING_SUBMIT_ALERT: "¡estuviste muy cerca del título real o respondiste igual que otra persona!",
                    ERROR_DRAWING_EMPTY: "¡Tienes que dibujar algo!",
                    STRING_SKIP_BUTTON: "paso (es ofensivo)",
                    STRING_SKIP_BUTTON_CONFIRM: "¿quieres continuar?",
                    STRING_TEXT_SUBMIT_ALERT: "¡no puedes no poner nada!",
                    STRING_ERROR_INVALID_ROOM_CODE: "El código de la sala no es válido",
                    STRING_ERROR_UNABLE_TO_JOIN: "No podemos conectarte a los servidores de Jackbox Games. Las causas habituales son los bloqueadores de anuncios y las extensiones de privacidad.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "Tu navegador no admite WebSockets.",
                    STRING_ERROR_INVALID_APP_ID: "ID de app no válido para la sala:",
                    STRING_SETTINGS: "Ajustes",
                    STRING_DYSLEXIC_FONT: "Fuente para disléxicos",
                    STRING_LARGE_FONT: "Fuente grande",
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_CANVAS_COMPATIBILITY: "Vaya, tu navegador no es compatible.",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no soporta WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No ha podido establecerse conexión con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "La partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Hace falta una contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "El juego está bloqueado",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte al juego",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                },
                fr: {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE COMO PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Se eliminarán el nombre, el avatar, las entradas y los dibujos de este jugador. ¿Quieres continuar?",
                    STRING_CENSOR_INFO: "pulsa <span class='censor-button-image censor-button-black'></span> para censurar al jugador el resto de la partida y eliminar sus respuestas, nombre y avatar (qué intenso)",
                    STRING_SKIP: "¡paso!",
                    STRING_THANK_YOU: "gracias por el dibujo",
                    STRING_DRAWING_OVER: "¡no se dibuja más!",
                    STRING_CENSOR_LIE_CONFIRM: "se eliminará la entrada de este jugador, así como todas sus entradas y dibujos futuros. ¿quieres continuar?",
                    STRING_YES: "Sí",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "¡gracias por participar, miembro del público!",
                    STRING_AUDIENCE_WELCOME_0: "bienvenido al público<br>¡es divertido!",
                    STRING_AUDIENCE_WELCOME_1: "bienvenido al público<br>enseguida podrás participar",
                    STRING_AUDIENCE_WELCOME_2: "bienvenido al público<br>enseguida empieza la fiesta",
                    STRING_AUDIENCE_WELCOME_3: "bienvenido al público<br>te estábamos esperando",
                    STRING_AUDIENCE_WELCOME_4: "bienvenido al público<br>no es tan divertido como jugar, pero es mejor que estar solo sin hacer nada",
                    STRING_AUDIENCE_WELCOME_5: "bienvenido al público<br>cuantos más, mejor",
                    STRING_AUDIENCE_WELCOME_6: "bienvenido al público<br>ya eres uno de nosotros",
                    STRING_AUDIENCE_WELCOME_7: "bienvenido al público<br>por favor, no comas nada crujiente durante el programa",
                    STRING_AUDIENCE_WELCOME_8: "bienvenido al público<br>ahora nos toca a nosotros",
                    STRING_AUDIENCE_WELCOME_9: "bienvenido al público<br>te gusta mirar, ¿eh?",
                    STRING_AUDIENCE_WELCOME_10: "bienvenido al público<br>ahora mismo no es que pase mucho, pero enseguida pillamos el ritmo",
                    STRING_AUDIENCE_WELCOME_11: "bienvenido al público<br>por favor, nada de montar motines, ¿eh?",
                    STRING_AUDIENCE_WELCOME_12: "bienvenido al público<br>siéntete como en casa",
                    STRING_AUDIENCE_WELCOME_13: "bienvenido al público<br>esperamos que te guste juzgar a la gente",
                    STRING_AUDIENCE_WELCOME_14: "bienvenido al público<br>respira hondo, en breve empieza lo bueno",
                    STRING_AUDIENCE_WELCOME_15: "bienvenido al público<br>que lo disfrutes",
                    STRING_AUDIENCE_WELCOME_16: "bienvenido al público<br>de todo el público, te preferimos a ti",
                    STRING_AUDIENCE_WELCOME_17: "bienvenido al público<br>¡los sueños se hacen realidad!",
                    STRING_AUDIENCE_WELCOME_18: "bienvenido al público<br>¡es la segunda forma más divertida de jugar a esto!",
                    STRING_AUDIENCE_WELCOME_19: "bienvenido al público<br>esta frase del guion va dedicada a ti",
                    STRING_AUDIENCE_WELCOME_20: "bienvenido al público<br>por favor, busca un asiento",
                    STRING_AUDIENCE_WELCOME_21: "bienvenido al público<br>bueeeeno, ¿qué te cuentas?",
                    STRING_AUTHOR_MESSAGE_0: "Este es tu dibujo.<br>Piensa en lo que has hecho.",
                    STRING_AUTHOR_MESSAGE_1: "Este es tu dibujo.<br>Quizá deberías ir al médico.",
                    STRING_AUTHOR_MESSAGE_2: "Este es tu dibujo.<br>En esto te has convertido.",
                    STRING_AUTHOR_MESSAGE_3: "Este es tu dibujo.<br>Este es tu diseño.",
                    STRING_AUTHOR_MESSAGE_4: "Este es tu dibujo.<br>¡Después de esto, solo cabe mejorar!",
                    STRING_AUTHOR_MESSAGE_5: "Este es tu dibujo.<br>Relájate.",
                    STRING_AUTHOR_MESSAGE_6: "Este es tu dibujo.<br>Disfruta del momento.",
                    STRING_AUTHOR_MESSAGE_7: "Este es tu dibujo.<br>Demasiado tarde para cambiarlo.",
                    STRING_AUTHOR_MESSAGE_8: "Este es tu dibujo.<br>No puedes echarle la culpa a nadie más.",
                    STRING_AUTHOR_MESSAGE_9: "Este es tu dibujo.<br>Y tu vida cambiará para siempre.",
                    STRING_AUTHOR_MESSAGE_10: "Este es tu dibujo.<br>¿Sí, vale?",
                    STRING_AUTHOR_MESSAGE_11: "Este es tu dibujo.<br>Sin comentarios.",
                    STRING_AUTHOR_MESSAGE_12: "Este es tu dibujo.<br>Podría ser peor.",
                    STRING_AUTHOR_MESSAGE_13: "Este es tu dibujo.<br>Esto es culpa tuya.",
                    STRING_AUTHOR_MESSAGE_14: "Este es tu dibujo.<br>Sí… Ajá…",
                    STRING_AUTHOR_MESSAGE_15: "Este es tu dibujo.<br>No pasa nada, pronto acabará todo.",
                    STRING_AUTHOR_MESSAGE_16: "Este es tu dibujo.<br>No te castigues demasiado por esto.",
                    STRING_AUTHOR_MESSAGE_17: "Este es tu dibujo.<br>Esto es arte.",
                    STRING_AUTHOR_MESSAGE_18: "Este es tu dibujo.<br>¿Gracias?",
                    STRING_AUTHOR_MESSAGE_19: "Este es tu dibujo.<br>¡Chócala!",
                    STRING_AUTHOR_MESSAGE_20: "Este es tu dibujo.<br>¿Por qué no duermes un poco?",
                    STRING_AUTHOR_MESSAGE_21: "Este es tu dibujo.<br>Tómatelo con filosofía.",
                    STRING_AUTHOR_MESSAGE_22: "Este es tu dibujo.<br>La vergüenza pasará.",
                    STRING_AUTHOR_MESSAGE_23: "Este es tu dibujo.<br>De psiquiatra.",
                    STRING_AUTHOR_MESSAGE_24: "Este es tu dibujo.<br>Asume las consecuencias.",
                    STRING_AUTHOR_MESSAGE_25: "Este es tu dibujo.<br>Ya está hecho.",
                    STRING_AUTHOR_MESSAGE_26: "¿Has dibujado esto?<br>Calma. Todo pasará.",
                    STRING_AUTHOR_MESSAGE_27: "Este es tu dibujo.<br>Bueno, alguien te querrá. Tal vez.",
                    STRING_AUTHOR_MESSAGE_28: "Este es tu dibujo.<br>Gracias.",
                    STRING_AUTHOR_MESSAGE_29: "Este es tu dibujo.<br>Madre mía.",
                    STRING_AUTHOR_MESSAGE_30: "Este es tu dibujo.<br>Ja. Ja. Ja. Ja.",
                    STRING_AUTHOR_MESSAGE_31: "Este es tu dibujo.<br>Te quiero por ello.",
                    STRING_AUTHOR_MESSAGE_32: "Este es tu dibujo.<br>Qué raro.",
                    STRING_AUTHOR_MESSAGE_33: "Este es tu dibujo.<br>Mientras te guste a ti…",
                    STRING_AUTHOR_MESSAGE_34: "Este es tu dibujo.<br>Oye, ¿alguna vez te has planteado si serás la única persona del universo? ¿Si todo lo demás… todos, todas las cosas, están en tu cabeza? ¿Eh?",
                    STRING_AUTHOR_MESSAGE_35: "Este es tu dibujo.<br>Para echar unas risas vale.",
                    STRING_AUTHOR_MESSAGE_36: "Este es tu dibujo.<br>No se te reconocerá hasta después de tu muerte.",
                    STRING_AUTHOR_MESSAGE_37: "Este es tu dibujo.<br>Aunque eso ya lo sabrás, claro.",
                    STRING_AUTHOR_MESSAGE_38: "Este es tu dibujo.<br>Ver para creer.",
                    STRING_AUTHOR_MESSAGE_39: "Este es tu dibujo.<br>La historia te juzgará.",
                    STRING_AUTHOR_MESSAGE_40: "Este es tu dibujo.<br>Disfrútalo.",
                    STRING_AUTHOR_MESSAGE_41: "Este es tu dibujo.<br>Está bien.",
                    STRING_SUBMIT_ALERT: "¡estuviste muy cerca del título real o respondiste igual que otra persona!",
                    ERROR_DRAWING_EMPTY: "¡Tienes que dibujar algo!",
                    STRING_SKIP_BUTTON: "paso (es ofensivo)",
                    STRING_SKIP_BUTTON_CONFIRM: "¿quieres continuar?",
                    STRING_TEXT_SUBMIT_ALERT: "¡no puedes no poner nada!",
                    STRING_ERROR_INVALID_ROOM_CODE: "El código de la sala no es válido",
                    STRING_ERROR_UNABLE_TO_JOIN: "No podemos conectarte a los servidores de Jackbox Games. Las causas habituales son los bloqueadores de anuncios y las extensiones de privacidad.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "Tu navegador no admite WebSockets.",
                    STRING_ERROR_INVALID_APP_ID: "ID de app no válido para la sala:",
                    STRING_SETTINGS: "Ajustes",
                    STRING_DYSLEXIC_FONT: "Fuente para disléxicos",
                    STRING_LARGE_FONT: "Fuente grande",
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_CANVAS_COMPATIBILITY: "Vaya, tu navegador no es compatible.",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no soporta WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No ha podido establecerse conexión con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "La partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Hace falta una contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "El juego está bloqueado",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte al juego",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                },
                it: {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE COMO PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Se eliminarán el nombre, el avatar, las entradas y los dibujos de este jugador. ¿Quieres continuar?",
                    STRING_CENSOR_INFO: "pulsa <span class='censor-button-image censor-button-black'></span> para censurar al jugador el resto de la partida y eliminar sus respuestas, nombre y avatar (qué intenso)",
                    STRING_SKIP: "¡paso!",
                    STRING_THANK_YOU: "gracias por el dibujo",
                    STRING_DRAWING_OVER: "¡no se dibuja más!",
                    STRING_CENSOR_LIE_CONFIRM: "se eliminará la entrada de este jugador, así como todas sus entradas y dibujos futuros. ¿quieres continuar?",
                    STRING_YES: "Sí",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "¡gracias por participar, miembro del público!",
                    STRING_AUDIENCE_WELCOME_0: "bienvenido al público<br>¡es divertido!",
                    STRING_AUDIENCE_WELCOME_1: "bienvenido al público<br>enseguida podrás participar",
                    STRING_AUDIENCE_WELCOME_2: "bienvenido al público<br>enseguida empieza la fiesta",
                    STRING_AUDIENCE_WELCOME_3: "bienvenido al público<br>te estábamos esperando",
                    STRING_AUDIENCE_WELCOME_4: "bienvenido al público<br>no es tan divertido como jugar, pero es mejor que estar solo sin hacer nada",
                    STRING_AUDIENCE_WELCOME_5: "bienvenido al público<br>cuantos más, mejor",
                    STRING_AUDIENCE_WELCOME_6: "bienvenido al público<br>ya eres uno de nosotros",
                    STRING_AUDIENCE_WELCOME_7: "bienvenido al público<br>por favor, no comas nada crujiente durante el programa",
                    STRING_AUDIENCE_WELCOME_8: "bienvenido al público<br>ahora nos toca a nosotros",
                    STRING_AUDIENCE_WELCOME_9: "bienvenido al público<br>te gusta mirar, ¿eh?",
                    STRING_AUDIENCE_WELCOME_10: "bienvenido al público<br>ahora mismo no es que pase mucho, pero enseguida pillamos el ritmo",
                    STRING_AUDIENCE_WELCOME_11: "bienvenido al público<br>por favor, nada de montar motines, ¿eh?",
                    STRING_AUDIENCE_WELCOME_12: "bienvenido al público<br>siéntete como en casa",
                    STRING_AUDIENCE_WELCOME_13: "bienvenido al público<br>esperamos que te guste juzgar a la gente",
                    STRING_AUDIENCE_WELCOME_14: "bienvenido al público<br>respira hondo, en breve empieza lo bueno",
                    STRING_AUDIENCE_WELCOME_15: "bienvenido al público<br>que lo disfrutes",
                    STRING_AUDIENCE_WELCOME_16: "bienvenido al público<br>de todo el público, te preferimos a ti",
                    STRING_AUDIENCE_WELCOME_17: "bienvenido al público<br>¡los sueños se hacen realidad!",
                    STRING_AUDIENCE_WELCOME_18: "bienvenido al público<br>¡es la segunda forma más divertida de jugar a esto!",
                    STRING_AUDIENCE_WELCOME_19: "bienvenido al público<br>esta frase del guion va dedicada a ti",
                    STRING_AUDIENCE_WELCOME_20: "bienvenido al público<br>por favor, busca un asiento",
                    STRING_AUDIENCE_WELCOME_21: "bienvenido al público<br>bueeeeno, ¿qué te cuentas?",
                    STRING_AUTHOR_MESSAGE_0: "Este es tu dibujo.<br>Piensa en lo que has hecho.",
                    STRING_AUTHOR_MESSAGE_1: "Este es tu dibujo.<br>Quizá deberías ir al médico.",
                    STRING_AUTHOR_MESSAGE_2: "Este es tu dibujo.<br>En esto te has convertido.",
                    STRING_AUTHOR_MESSAGE_3: "Este es tu dibujo.<br>Este es tu diseño.",
                    STRING_AUTHOR_MESSAGE_4: "Este es tu dibujo.<br>¡Después de esto, solo cabe mejorar!",
                    STRING_AUTHOR_MESSAGE_5: "Este es tu dibujo.<br>Relájate.",
                    STRING_AUTHOR_MESSAGE_6: "Este es tu dibujo.<br>Disfruta del momento.",
                    STRING_AUTHOR_MESSAGE_7: "Este es tu dibujo.<br>Demasiado tarde para cambiarlo.",
                    STRING_AUTHOR_MESSAGE_8: "Este es tu dibujo.<br>No puedes echarle la culpa a nadie más.",
                    STRING_AUTHOR_MESSAGE_9: "Este es tu dibujo.<br>Y tu vida cambiará para siempre.",
                    STRING_AUTHOR_MESSAGE_10: "Este es tu dibujo.<br>¿Sí, vale?",
                    STRING_AUTHOR_MESSAGE_11: "Este es tu dibujo.<br>Sin comentarios.",
                    STRING_AUTHOR_MESSAGE_12: "Este es tu dibujo.<br>Podría ser peor.",
                    STRING_AUTHOR_MESSAGE_13: "Este es tu dibujo.<br>Esto es culpa tuya.",
                    STRING_AUTHOR_MESSAGE_14: "Este es tu dibujo.<br>Sí… Ajá…",
                    STRING_AUTHOR_MESSAGE_15: "Este es tu dibujo.<br>No pasa nada, pronto acabará todo.",
                    STRING_AUTHOR_MESSAGE_16: "Este es tu dibujo.<br>No te castigues demasiado por esto.",
                    STRING_AUTHOR_MESSAGE_17: "Este es tu dibujo.<br>Esto es arte.",
                    STRING_AUTHOR_MESSAGE_18: "Este es tu dibujo.<br>¿Gracias?",
                    STRING_AUTHOR_MESSAGE_19: "Este es tu dibujo.<br>¡Chócala!",
                    STRING_AUTHOR_MESSAGE_20: "Este es tu dibujo.<br>¿Por qué no duermes un poco?",
                    STRING_AUTHOR_MESSAGE_21: "Este es tu dibujo.<br>Tómatelo con filosofía.",
                    STRING_AUTHOR_MESSAGE_22: "Este es tu dibujo.<br>La vergüenza pasará.",
                    STRING_AUTHOR_MESSAGE_23: "Este es tu dibujo.<br>De psiquiatra.",
                    STRING_AUTHOR_MESSAGE_24: "Este es tu dibujo.<br>Asume las consecuencias.",
                    STRING_AUTHOR_MESSAGE_25: "Este es tu dibujo.<br>Ya está hecho.",
                    STRING_AUTHOR_MESSAGE_26: "¿Has dibujado esto?<br>Calma. Todo pasará.",
                    STRING_AUTHOR_MESSAGE_27: "Este es tu dibujo.<br>Bueno, alguien te querrá. Tal vez.",
                    STRING_AUTHOR_MESSAGE_28: "Este es tu dibujo.<br>Gracias.",
                    STRING_AUTHOR_MESSAGE_29: "Este es tu dibujo.<br>Madre mía.",
                    STRING_AUTHOR_MESSAGE_30: "Este es tu dibujo.<br>Ja. Ja. Ja. Ja.",
                    STRING_AUTHOR_MESSAGE_31: "Este es tu dibujo.<br>Te quiero por ello.",
                    STRING_AUTHOR_MESSAGE_32: "Este es tu dibujo.<br>Qué raro.",
                    STRING_AUTHOR_MESSAGE_33: "Este es tu dibujo.<br>Mientras te guste a ti…",
                    STRING_AUTHOR_MESSAGE_34: "Este es tu dibujo.<br>Oye, ¿alguna vez te has planteado si serás la única persona del universo? ¿Si todo lo demás… todos, todas las cosas, están en tu cabeza? ¿Eh?",
                    STRING_AUTHOR_MESSAGE_35: "Este es tu dibujo.<br>Para echar unas risas vale.",
                    STRING_AUTHOR_MESSAGE_36: "Este es tu dibujo.<br>No se te reconocerá hasta después de tu muerte.",
                    STRING_AUTHOR_MESSAGE_37: "Este es tu dibujo.<br>Aunque eso ya lo sabrás, claro.",
                    STRING_AUTHOR_MESSAGE_38: "Este es tu dibujo.<br>Ver para creer.",
                    STRING_AUTHOR_MESSAGE_39: "Este es tu dibujo.<br>La historia te juzgará.",
                    STRING_AUTHOR_MESSAGE_40: "Este es tu dibujo.<br>Disfrútalo.",
                    STRING_AUTHOR_MESSAGE_41: "Este es tu dibujo.<br>Está bien.",
                    STRING_SUBMIT_ALERT: "¡estuviste muy cerca del título real o respondiste igual que otra persona!",
                    ERROR_DRAWING_EMPTY: "¡Tienes que dibujar algo!",
                    STRING_SKIP_BUTTON: "paso (es ofensivo)",
                    STRING_SKIP_BUTTON_CONFIRM: "¿quieres continuar?",
                    STRING_TEXT_SUBMIT_ALERT: "¡no puedes no poner nada!",
                    STRING_ERROR_INVALID_ROOM_CODE: "El código de la sala no es válido",
                    STRING_ERROR_UNABLE_TO_JOIN: "No podemos conectarte a los servidores de Jackbox Games. Las causas habituales son los bloqueadores de anuncios y las extensiones de privacidad.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "Tu navegador no admite WebSockets.",
                    STRING_ERROR_INVALID_APP_ID: "ID de app no válido para la sala:",
                    STRING_SETTINGS: "Ajustes",
                    STRING_DYSLEXIC_FONT: "Fuente para disléxicos",
                    STRING_LARGE_FONT: "Fuente grande",
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_CANVAS_COMPATIBILITY: "Vaya, tu navegador no es compatible.",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no soporta WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No ha podido establecerse conexión con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "La partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Hace falta una contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "El juego está bloqueado",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte al juego",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                },
                de: {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE COMO PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Se eliminarán el nombre, el avatar, las entradas y los dibujos de este jugador. ¿Quieres continuar?",
                    STRING_CENSOR_INFO: "pulsa <span class='censor-button-image censor-button-black'></span> para censurar al jugador el resto de la partida y eliminar sus respuestas, nombre y avatar (qué intenso)",
                    STRING_SKIP: "¡paso!",
                    STRING_THANK_YOU: "gracias por el dibujo",
                    STRING_DRAWING_OVER: "¡no se dibuja más!",
                    STRING_CENSOR_LIE_CONFIRM: "se eliminará la entrada de este jugador, así como todas sus entradas y dibujos futuros. ¿quieres continuar?",
                    STRING_YES: "Sí",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "¡gracias por participar, miembro del público!",
                    STRING_AUDIENCE_WELCOME_0: "bienvenido al público<br>¡es divertido!",
                    STRING_AUDIENCE_WELCOME_1: "bienvenido al público<br>enseguida podrás participar",
                    STRING_AUDIENCE_WELCOME_2: "bienvenido al público<br>enseguida empieza la fiesta",
                    STRING_AUDIENCE_WELCOME_3: "bienvenido al público<br>te estábamos esperando",
                    STRING_AUDIENCE_WELCOME_4: "bienvenido al público<br>no es tan divertido como jugar, pero es mejor que estar solo sin hacer nada",
                    STRING_AUDIENCE_WELCOME_5: "bienvenido al público<br>cuantos más, mejor",
                    STRING_AUDIENCE_WELCOME_6: "bienvenido al público<br>ya eres uno de nosotros",
                    STRING_AUDIENCE_WELCOME_7: "bienvenido al público<br>por favor, no comas nada crujiente durante el programa",
                    STRING_AUDIENCE_WELCOME_8: "bienvenido al público<br>ahora nos toca a nosotros",
                    STRING_AUDIENCE_WELCOME_9: "bienvenido al público<br>te gusta mirar, ¿eh?",
                    STRING_AUDIENCE_WELCOME_10: "bienvenido al público<br>ahora mismo no es que pase mucho, pero enseguida pillamos el ritmo",
                    STRING_AUDIENCE_WELCOME_11: "bienvenido al público<br>por favor, nada de montar motines, ¿eh?",
                    STRING_AUDIENCE_WELCOME_12: "bienvenido al público<br>siéntete como en casa",
                    STRING_AUDIENCE_WELCOME_13: "bienvenido al público<br>esperamos que te guste juzgar a la gente",
                    STRING_AUDIENCE_WELCOME_14: "bienvenido al público<br>respira hondo, en breve empieza lo bueno",
                    STRING_AUDIENCE_WELCOME_15: "bienvenido al público<br>que lo disfrutes",
                    STRING_AUDIENCE_WELCOME_16: "bienvenido al público<br>de todo el público, te preferimos a ti",
                    STRING_AUDIENCE_WELCOME_17: "bienvenido al público<br>¡los sueños se hacen realidad!",
                    STRING_AUDIENCE_WELCOME_18: "bienvenido al público<br>¡es la segunda forma más divertida de jugar a esto!",
                    STRING_AUDIENCE_WELCOME_19: "bienvenido al público<br>esta frase del guion va dedicada a ti",
                    STRING_AUDIENCE_WELCOME_20: "bienvenido al público<br>por favor, busca un asiento",
                    STRING_AUDIENCE_WELCOME_21: "bienvenido al público<br>bueeeeno, ¿qué te cuentas?",
                    STRING_AUTHOR_MESSAGE_0: "Este es tu dibujo.<br>Piensa en lo que has hecho.",
                    STRING_AUTHOR_MESSAGE_1: "Este es tu dibujo.<br>Quizá deberías ir al médico.",
                    STRING_AUTHOR_MESSAGE_2: "Este es tu dibujo.<br>En esto te has convertido.",
                    STRING_AUTHOR_MESSAGE_3: "Este es tu dibujo.<br>Este es tu diseño.",
                    STRING_AUTHOR_MESSAGE_4: "Este es tu dibujo.<br>¡Después de esto, solo cabe mejorar!",
                    STRING_AUTHOR_MESSAGE_5: "Este es tu dibujo.<br>Relájate.",
                    STRING_AUTHOR_MESSAGE_6: "Este es tu dibujo.<br>Disfruta del momento.",
                    STRING_AUTHOR_MESSAGE_7: "Este es tu dibujo.<br>Demasiado tarde para cambiarlo.",
                    STRING_AUTHOR_MESSAGE_8: "Este es tu dibujo.<br>No puedes echarle la culpa a nadie más.",
                    STRING_AUTHOR_MESSAGE_9: "Este es tu dibujo.<br>Y tu vida cambiará para siempre.",
                    STRING_AUTHOR_MESSAGE_10: "Este es tu dibujo.<br>¿Sí, vale?",
                    STRING_AUTHOR_MESSAGE_11: "Este es tu dibujo.<br>Sin comentarios.",
                    STRING_AUTHOR_MESSAGE_12: "Este es tu dibujo.<br>Podría ser peor.",
                    STRING_AUTHOR_MESSAGE_13: "Este es tu dibujo.<br>Esto es culpa tuya.",
                    STRING_AUTHOR_MESSAGE_14: "Este es tu dibujo.<br>Sí… Ajá…",
                    STRING_AUTHOR_MESSAGE_15: "Este es tu dibujo.<br>No pasa nada, pronto acabará todo.",
                    STRING_AUTHOR_MESSAGE_16: "Este es tu dibujo.<br>No te castigues demasiado por esto.",
                    STRING_AUTHOR_MESSAGE_17: "Este es tu dibujo.<br>Esto es arte.",
                    STRING_AUTHOR_MESSAGE_18: "Este es tu dibujo.<br>¿Gracias?",
                    STRING_AUTHOR_MESSAGE_19: "Este es tu dibujo.<br>¡Chócala!",
                    STRING_AUTHOR_MESSAGE_20: "Este es tu dibujo.<br>¿Por qué no duermes un poco?",
                    STRING_AUTHOR_MESSAGE_21: "Este es tu dibujo.<br>Tómatelo con filosofía.",
                    STRING_AUTHOR_MESSAGE_22: "Este es tu dibujo.<br>La vergüenza pasará.",
                    STRING_AUTHOR_MESSAGE_23: "Este es tu dibujo.<br>De psiquiatra.",
                    STRING_AUTHOR_MESSAGE_24: "Este es tu dibujo.<br>Asume las consecuencias.",
                    STRING_AUTHOR_MESSAGE_25: "Este es tu dibujo.<br>Ya está hecho.",
                    STRING_AUTHOR_MESSAGE_26: "¿Has dibujado esto?<br>Calma. Todo pasará.",
                    STRING_AUTHOR_MESSAGE_27: "Este es tu dibujo.<br>Bueno, alguien te querrá. Tal vez.",
                    STRING_AUTHOR_MESSAGE_28: "Este es tu dibujo.<br>Gracias.",
                    STRING_AUTHOR_MESSAGE_29: "Este es tu dibujo.<br>Madre mía.",
                    STRING_AUTHOR_MESSAGE_30: "Este es tu dibujo.<br>Ja. Ja. Ja. Ja.",
                    STRING_AUTHOR_MESSAGE_31: "Este es tu dibujo.<br>Te quiero por ello.",
                    STRING_AUTHOR_MESSAGE_32: "Este es tu dibujo.<br>Qué raro.",
                    STRING_AUTHOR_MESSAGE_33: "Este es tu dibujo.<br>Mientras te guste a ti…",
                    STRING_AUTHOR_MESSAGE_34: "Este es tu dibujo.<br>Oye, ¿alguna vez te has planteado si serás la única persona del universo? ¿Si todo lo demás… todos, todas las cosas, están en tu cabeza? ¿Eh?",
                    STRING_AUTHOR_MESSAGE_35: "Este es tu dibujo.<br>Para echar unas risas vale.",
                    STRING_AUTHOR_MESSAGE_36: "Este es tu dibujo.<br>No se te reconocerá hasta después de tu muerte.",
                    STRING_AUTHOR_MESSAGE_37: "Este es tu dibujo.<br>Aunque eso ya lo sabrás, claro.",
                    STRING_AUTHOR_MESSAGE_38: "Este es tu dibujo.<br>Ver para creer.",
                    STRING_AUTHOR_MESSAGE_39: "Este es tu dibujo.<br>La historia te juzgará.",
                    STRING_AUTHOR_MESSAGE_40: "Este es tu dibujo.<br>Disfrútalo.",
                    STRING_AUTHOR_MESSAGE_41: "Este es tu dibujo.<br>Está bien.",
                    STRING_SUBMIT_ALERT: "¡estuviste muy cerca del título real o respondiste igual que otra persona!",
                    ERROR_DRAWING_EMPTY: "¡Tienes que dibujar algo!",
                    STRING_SKIP_BUTTON: "paso (es ofensivo)",
                    STRING_SKIP_BUTTON_CONFIRM: "¿quieres continuar?",
                    STRING_TEXT_SUBMIT_ALERT: "¡no puedes no poner nada!",
                    STRING_ERROR_INVALID_ROOM_CODE: "El código de la sala no es válido",
                    STRING_ERROR_UNABLE_TO_JOIN: "No podemos conectarte a los servidores de Jackbox Games. Las causas habituales son los bloqueadores de anuncios y las extensiones de privacidad.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "Tu navegador no admite WebSockets.",
                    STRING_ERROR_INVALID_APP_ID: "ID de app no válido para la sala:",
                    STRING_SETTINGS: "Ajustes",
                    STRING_DYSLEXIC_FONT: "Fuente para disléxicos",
                    STRING_LARGE_FONT: "Fuente grande",
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_CANVAS_COMPATIBILITY: "Vaya, tu navegador no es compatible.",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no soporta WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No ha podido establecerse conexión con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "La partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Hace falta una contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "El juego está bloqueado",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte al juego",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                },
                es: {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE COMO PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Se eliminarán el nombre, el avatar, las entradas y los dibujos de este jugador. ¿Quieres continuar?",
                    STRING_CENSOR_INFO: "pulsa <span class='censor-button-image censor-button-black'></span> para censurar al jugador el resto de la partida y eliminar sus respuestas, nombre y avatar (qué intenso)",
                    STRING_SKIP: "¡paso!",
                    STRING_THANK_YOU: "gracias por el dibujo",
                    STRING_DRAWING_OVER: "¡no se dibuja más!",
                    STRING_CENSOR_LIE_CONFIRM: "se eliminará la entrada de este jugador, así como todas sus entradas y dibujos futuros. ¿quieres continuar?",
                    STRING_YES: "Sí",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "¡gracias por participar, miembro del público!",
                    STRING_AUDIENCE_WELCOME_0: "bienvenido al público<br>¡es divertido!",
                    STRING_AUDIENCE_WELCOME_1: "bienvenido al público<br>enseguida podrás participar",
                    STRING_AUDIENCE_WELCOME_2: "bienvenido al público<br>enseguida empieza la fiesta",
                    STRING_AUDIENCE_WELCOME_3: "bienvenido al público<br>te estábamos esperando",
                    STRING_AUDIENCE_WELCOME_4: "bienvenido al público<br>no es tan divertido como jugar, pero es mejor que estar solo sin hacer nada",
                    STRING_AUDIENCE_WELCOME_5: "bienvenido al público<br>cuantos más, mejor",
                    STRING_AUDIENCE_WELCOME_6: "bienvenido al público<br>ya eres uno de nosotros",
                    STRING_AUDIENCE_WELCOME_7: "bienvenido al público<br>por favor, no comas nada crujiente durante el programa",
                    STRING_AUDIENCE_WELCOME_8: "bienvenido al público<br>ahora nos toca a nosotros",
                    STRING_AUDIENCE_WELCOME_9: "bienvenido al público<br>te gusta mirar, ¿eh?",
                    STRING_AUDIENCE_WELCOME_10: "bienvenido al público<br>ahora mismo no es que pase mucho, pero enseguida pillamos el ritmo",
                    STRING_AUDIENCE_WELCOME_11: "bienvenido al público<br>por favor, nada de montar motines, ¿eh?",
                    STRING_AUDIENCE_WELCOME_12: "bienvenido al público<br>siéntete como en casa",
                    STRING_AUDIENCE_WELCOME_13: "bienvenido al público<br>esperamos que te guste juzgar a la gente",
                    STRING_AUDIENCE_WELCOME_14: "bienvenido al público<br>respira hondo, en breve empieza lo bueno",
                    STRING_AUDIENCE_WELCOME_15: "bienvenido al público<br>que lo disfrutes",
                    STRING_AUDIENCE_WELCOME_16: "bienvenido al público<br>de todo el público, te preferimos a ti",
                    STRING_AUDIENCE_WELCOME_17: "bienvenido al público<br>¡los sueños se hacen realidad!",
                    STRING_AUDIENCE_WELCOME_18: "bienvenido al público<br>¡es la segunda forma más divertida de jugar a esto!",
                    STRING_AUDIENCE_WELCOME_19: "bienvenido al público<br>esta frase del guion va dedicada a ti",
                    STRING_AUDIENCE_WELCOME_20: "bienvenido al público<br>por favor, busca un asiento",
                    STRING_AUDIENCE_WELCOME_21: "bienvenido al público<br>bueeeeno, ¿qué te cuentas?",
                    STRING_AUTHOR_MESSAGE_0: "Este es tu dibujo.<br>Piensa en lo que has hecho.",
                    STRING_AUTHOR_MESSAGE_1: "Este es tu dibujo.<br>Quizá deberías ir al médico.",
                    STRING_AUTHOR_MESSAGE_2: "Este es tu dibujo.<br>En esto te has convertido.",
                    STRING_AUTHOR_MESSAGE_3: "Este es tu dibujo.<br>Este es tu diseño.",
                    STRING_AUTHOR_MESSAGE_4: "Este es tu dibujo.<br>¡Después de esto, solo cabe mejorar!",
                    STRING_AUTHOR_MESSAGE_5: "Este es tu dibujo.<br>Relájate.",
                    STRING_AUTHOR_MESSAGE_6: "Este es tu dibujo.<br>Disfruta del momento.",
                    STRING_AUTHOR_MESSAGE_7: "Este es tu dibujo.<br>Demasiado tarde para cambiarlo.",
                    STRING_AUTHOR_MESSAGE_8: "Este es tu dibujo.<br>No puedes echarle la culpa a nadie más.",
                    STRING_AUTHOR_MESSAGE_9: "Este es tu dibujo.<br>Y tu vida cambiará para siempre.",
                    STRING_AUTHOR_MESSAGE_10: "Este es tu dibujo.<br>¿Sí, vale?",
                    STRING_AUTHOR_MESSAGE_11: "Este es tu dibujo.<br>Sin comentarios.",
                    STRING_AUTHOR_MESSAGE_12: "Este es tu dibujo.<br>Podría ser peor.",
                    STRING_AUTHOR_MESSAGE_13: "Este es tu dibujo.<br>Esto es culpa tuya.",
                    STRING_AUTHOR_MESSAGE_14: "Este es tu dibujo.<br>Sí… Ajá…",
                    STRING_AUTHOR_MESSAGE_15: "Este es tu dibujo.<br>No pasa nada, pronto acabará todo.",
                    STRING_AUTHOR_MESSAGE_16: "Este es tu dibujo.<br>No te castigues demasiado por esto.",
                    STRING_AUTHOR_MESSAGE_17: "Este es tu dibujo.<br>Esto es arte.",
                    STRING_AUTHOR_MESSAGE_18: "Este es tu dibujo.<br>¿Gracias?",
                    STRING_AUTHOR_MESSAGE_19: "Este es tu dibujo.<br>¡Chócala!",
                    STRING_AUTHOR_MESSAGE_20: "Este es tu dibujo.<br>¿Por qué no duermes un poco?",
                    STRING_AUTHOR_MESSAGE_21: "Este es tu dibujo.<br>Tómatelo con filosofía.",
                    STRING_AUTHOR_MESSAGE_22: "Este es tu dibujo.<br>La vergüenza pasará.",
                    STRING_AUTHOR_MESSAGE_23: "Este es tu dibujo.<br>De psiquiatra.",
                    STRING_AUTHOR_MESSAGE_24: "Este es tu dibujo.<br>Asume las consecuencias.",
                    STRING_AUTHOR_MESSAGE_25: "Este es tu dibujo.<br>Ya está hecho.",
                    STRING_AUTHOR_MESSAGE_26: "¿Has dibujado esto?<br>Calma. Todo pasará.",
                    STRING_AUTHOR_MESSAGE_27: "Este es tu dibujo.<br>Bueno, alguien te querrá. Tal vez.",
                    STRING_AUTHOR_MESSAGE_28: "Este es tu dibujo.<br>Gracias.",
                    STRING_AUTHOR_MESSAGE_29: "Este es tu dibujo.<br>Madre mía.",
                    STRING_AUTHOR_MESSAGE_30: "Este es tu dibujo.<br>Ja. Ja. Ja. Ja.",
                    STRING_AUTHOR_MESSAGE_31: "Este es tu dibujo.<br>Te quiero por ello.",
                    STRING_AUTHOR_MESSAGE_32: "Este es tu dibujo.<br>Qué raro.",
                    STRING_AUTHOR_MESSAGE_33: "Este es tu dibujo.<br>Mientras te guste a ti…",
                    STRING_AUTHOR_MESSAGE_34: "Este es tu dibujo.<br>Oye, ¿alguna vez te has planteado si serás la única persona del universo? ¿Si todo lo demás… todos, todas las cosas, están en tu cabeza? ¿Eh?",
                    STRING_AUTHOR_MESSAGE_35: "Este es tu dibujo.<br>Para echar unas risas vale.",
                    STRING_AUTHOR_MESSAGE_36: "Este es tu dibujo.<br>No se te reconocerá hasta después de tu muerte.",
                    STRING_AUTHOR_MESSAGE_37: "Este es tu dibujo.<br>Aunque eso ya lo sabrás, claro.",
                    STRING_AUTHOR_MESSAGE_38: "Este es tu dibujo.<br>Ver para creer.",
                    STRING_AUTHOR_MESSAGE_39: "Este es tu dibujo.<br>La historia te juzgará.",
                    STRING_AUTHOR_MESSAGE_40: "Este es tu dibujo.<br>Disfrútalo.",
                    STRING_AUTHOR_MESSAGE_41: "Este es tu dibujo.<br>Está bien.",
                    STRING_SUBMIT_ALERT: "¡estuviste muy cerca del título real o respondiste igual que otra persona!",
                    ERROR_DRAWING_EMPTY: "¡Tienes que dibujar algo!",
                    STRING_SKIP_BUTTON: "paso (es ofensivo)",
                    STRING_SKIP_BUTTON_CONFIRM: "¿quieres continuar?",
                    STRING_TEXT_SUBMIT_ALERT: "¡no puedes no poner nada!",
                    STRING_ERROR_INVALID_ROOM_CODE: "El código de la sala no es válido",
                    STRING_ERROR_UNABLE_TO_JOIN: "No podemos conectarte a los servidores de Jackbox Games. Las causas habituales son los bloqueadores de anuncios y las extensiones de privacidad.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "Tu navegador no admite WebSockets.",
                    STRING_ERROR_INVALID_APP_ID: "ID de app no válido para la sala:",
                    STRING_SETTINGS: "Ajustes",
                    STRING_DYSLEXIC_FONT: "Fuente para disléxicos",
                    STRING_LARGE_FONT: "Fuente grande",
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_CANVAS_COMPATIBILITY: "Vaya, tu navegador no es compatible.",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no soporta WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No ha podido establecerse conexión con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "La partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Hace falta una contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "El juego está bloqueado",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte al juego",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                },
                "es-XL": {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE AL PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin hacerte una foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no admite WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No podemos conectarte a los servidores de Jackbox Games. Puede ser debido a los bloqueadores de anuncios y las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "Esta partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Requiere contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "La sala está bloqueada",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte a la sala",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                }
            };
            var M = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "top-bar"
                }, [s("header", {
                    staticClass: "header",
                    on: {
                        click: e.onHamburgerClick
                    }
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "logo"
                }), e._v(" "), s("div", {
                    staticClass: "hamburger",
                    class: {
                        close: null !== e.openedTo
                    }
                }), e._v(" "), !e.openedTo && e.hasUnseenGames ? s("div", {
                    staticClass: "indicator"
                }) : e._e(), e._v(" "), e.twitch.user ? s("div", {
                    staticClass: "avatar",
                    style: "background-image: url(" + e.twitch.user.profile_image_url + ");"
                }) : e._e()])]), e._v(" "), s("transition", {
                    attrs: {
                        name: "open-transition"
                    }
                }, [e.openedTo ? s("transition-group", {
                    staticClass: "screen-container",
                    attrs: {
                        tag: "div",
                        name: "screen-transition"
                    }
                }, ["pastGames" === e.openedTo ? s("PastGames", {
                    key: "pastGames",
                    staticClass: "screen",
                    attrs: {
                        artifacts: e.artifacts
                    }
                }) : e._e(), e._v(" "), "menu" === e.openedTo ? s("Menu", {
                    key: "menu",
                    staticClass: "screen",
                    attrs: {
                        "has-unseen-games": e.hasUnseenGames,
                        twitch: e.twitch
                    },
                    on: {
                        pastGameClick: e.onPastGamesClick,
                        twitchLoginClick: e.onTwitchLoginClick,
                        twitchLogoutClick: e.onTwitchLogoutClick,
                        linkClick: e.onLinkClick
                    }
                }) : e._e()], 1) : e._e()], 1)], 1)
            };
            M._withStripped = !0;
            var L = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("nav", {
                    staticClass: "nav"
                }, [s("ul", [e.isTwitchAuthenticated ? s("li", {
                    staticClass: "twitch",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onTwitchLogoutClick.apply(null, arguments)
                        }
                    }
                }, [s("a", {
                    attrs: {
                        href: "#"
                    }
                }, [e._v(e._s(e.$t("STRING_MENU_LOGOUT")))])]) : s("li", {
                    staticClass: "twitch"
                }, [s("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onTwitchLoginClick.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("STRING_MENU_TWITCH")))])]), e._v(" "), s("li", {
                    staticClass: "moderator"
                }, [s("router-link", {
                    attrs: {
                        to: "/moderator"
                    }
                }, [e._v("MODERATOR")])], 1), e._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "http://help.jackboxgames.com",
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("help")
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_HELP")) + "\n            ")])]), e._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "https://shop.jackboxgames.com",
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("merch")
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_MERCH")) + "\n            ")])]), e._v(" "), s("li", [s("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onPastGamesClick.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_PAST_GAMES")) + "\n                "), e.hasUnseenGames ? s("div", {
                    staticClass: "indicator"
                }) : e._e()])]), e._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "https://capyparty.xyz/main",
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("mailinglist")
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_MAILING_LIST")) + "\n            ")])]), e._v(" "), s("li", {
                    staticClass: "social"
                }, [s("a", {
                    staticClass: "facebook",
                    attrs: {
                        "aria-label": "facebook",
                        target: "_blank",
                        href: "https://discord.gg/eqrTgjszuq"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("facebook")
                        }
                    }
                }), e._v(" "), s("a", {
                    staticClass: "twitter",
                    attrs: {
                        "aria-label": "github-square",
                        target: "_blank",
                        href: "https://github.com/CapyParty/capyparty-controller"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("twitter")
                        }
                    }
                })]), e._v(" "), s("li", {
                    staticClass: "version"
                }, [e._v(e._s(e.version))])])])
            };
            L._withStripped = !0;
            const f = _().extend({
                props: {
                    hasUnseenGames: Boolean,
                    twitch: Object
                },
                i18n: {
                    messages: U
                },
                data: () => ({
                    version: "4.2.10-Capy"
                }),
                computed: {
                    isTwitchAuthenticated() {
                        return void 0 !== this.twitch.user
                    }
                },
                methods: {
                    onPastGamesClick() {
                        this.$emit("pastGameClick")
                    },
                    onTwitchLoginClick() {
                        this.$emit("twitchLoginClick")
                    },
                    onTwitchLogoutClick() {
                        this.$emit("twitchLogoutClick")
                    },
                    onLinkClick(e) {
                        this.$emit("linkClick", e)
                    }
                }
            });
            var D = s(51900),
                w = (0, D.Z)(f, L, [], !1, null, "082a7a6a", null);
            w.options.__file = "src/apps/entry/views/signIn/Menu.vue";
            const H = w.exports;
            var k = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "past-games"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.artifacts.artifacts.length ? s("div", {
                    staticClass: "top-items"
                }, [s("h3", [e._v("YOUR PAST GAMES")]), e._v(" "), s("button", {
                    staticClass: "manage",
                    on: {
                        click: e.onManageClick
                    }
                }, [e._v("\n                " + e._s(e.isManaging ? "DONE" : "MANAGE") + "\n            ")])]) : s("p", {
                    staticClass: "empty"
                }, [e._v("No Past Games Yet")]), e._v(" "), s("transition-group", {
                    attrs: {
                        name: "list-transition"
                    }
                }, e._l(e.artifacts.artifacts, (function(t, i) {
                    return s("PastGame", {
                        key: t.url,
                        attrs: {
                            artifact: t,
                            index: i,
                            "is-managing": e.isManaging
                        },
                        on: {
                            removeClick: e.onRemoveClick
                        }
                    })
                })), 1)], 1)])
            };
            k._withStripped = !0;
            var P = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.config,
                        expression: "config"
                    }],
                    staticClass: "past-game",
                    class: {
                        managing: e.isManaging, confirming: e.showConfirm
                    }
                }, [i("a", {
                    staticClass: "card",
                    attrs: {
                        href: e.artifact.url,
                        target: "_blank"
                    },
                    on: {
                        click: e.onClick
                    }
                }, [i("div", {
                    staticClass: "image",
                    class: e.imageClasses
                }, [e.config && e.config.hasPreviews ? i("img", {
                    ref: "image",
                    attrs: {
                        src: e.imageSrc,
                        alt: e.artifact.gameName
                    },
                    on: {
                        error: e.onImageError,
                        load: e.onImageLoad
                    }
                }) : e._e()]), e._v(" "), i("p", {
                    staticClass: "cta"
                }, [e._v(e._s(e.cta) + "\n            "), i("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(52819),
                        expression: "require('../../images/icon-external_url.inline.svg')"
                    }],
                    staticClass: "external-icon"
                })]), e._v(" "), i("div", {
                    staticClass: "content"
                }, [i("p", {
                    staticClass: "name"
                }, [e._v(e._s(e.name))]), e._v(" "), i("p", {
                    staticClass: "date"
                }, [i("span", [e._v("PLAYED ON")]), e._v(e._s(e.artifact.date))])]), e._v(" "), e.viewed || e.artifact.viewed ? e._e() : i("p", {
                    staticClass: "new"
                }, [e._v("NEW")])]), e._v(" "), e.config && e.config.shopItems && e.config.shopItems.length ? i("div", {
                    staticClass: "items"
                }, e._l(e.config.shopItems, (function(t) {
                    return i("div", {
                        key: t,
                        staticClass: "item"
                    }, ["cards" === t ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(98087),
                            expression: "require('../../images/icon-cards.inline.svg')"
                        }]
                    }) : "mugs" === t ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(85061),
                            expression: "require('../../images/icon-mug.inline.svg')"
                        }]
                    }) : "shirts" === t ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(94379),
                            expression: "require('../../images/icon-shirt.inline.svg')"
                        }]
                    }) : e._e()])
                })), 0) : e._e(), e._v(" "), i("transition", {
                    attrs: {
                        name: "fade-transition"
                    }
                }, [e.showConfirm ? i("div", {
                    staticClass: "confirm"
                }, [i("div", {
                    staticClass: "contain"
                }, [i("p", [i("span", [e._v("Are you sure?")]), e._v("\n                    This will permanently remove this game"), i("br"), e._v("from your past games list.\n                ")]), e._v(" "), i("button", {
                    staticClass: "confirm-yes",
                    on: {
                        click: function(t) {
                            return e.$emit("removeClick", e.index)
                        }
                    }
                }, [e._v("Remove")]), e._v(" "), i("button", {
                    staticClass: "confirm-no",
                    on: {
                        click: e.onCancelClick
                    }
                }, [e._v("Cancel")])])]) : e._e()])], 1)
            };
            P._withStripped = !0;
            const W = _().extend({
                props: {
                    index: Number,
                    isManaging: Boolean,
                    artifact: Object
                },
                data: () => ({
                    viewed: !1,
                    status: "loading",
                    showConfirm: !1
                }),
                computed: {
                    config() {
                        return (0, h.cF)(this.artifact.gameName)
                    },
                    name() {
                        var e, t;
                        return this.showConfirm ? "Are You Sure?" : this.isManaging ? "Remove Game?" : null !== (t = null === (e = this.config) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
                    },
                    imageClasses() {
                        var e;
                        return "error" !== this.status && (null === (e = this.config) || void 0 === e ? void 0 : e.hasPreviews) ? "success" === this.status ? ["preview"] : [] : ["fallback", this.artifact.gameName]
                    },
                    imageSrc() {
                        return `https://s3.amazonaws.com/jbg-blobcast-artifacts/${this.artifact.gameName}/${this.artifact.id}/preview.png`
                    },
                    cta() {
                        var e, t;
                        return (null === (t = null === (e = this.config) || void 0 === e ? void 0 : e.shopItems) || void 0 === t ? void 0 : t.length) ? "VIEW GAME & SHOP" : "VIEW THIS GAME"
                    }
                },
                watch: {
                    isManaging() {
                        this.showConfirm = !1
                    }
                },
                methods: {
                    onImageLoad() {
                        this.status = "success"
                    },
                    onImageError() {
                        this.status = "error"
                    },
                    onClick(e) {
                        if (this.isManaging) return e.preventDefault(), void(this.showConfirm = !0);
                        N.Q.setAsViewed(this.index), this.viewed = !0, this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "galleryClicked",
                            label: this.artifact.gameName
                        })
                    },
                    onCancelClick() {
                        this.showConfirm = !1
                    }
                }
            });
            var y = (0, D.Z)(W, P, [], !1, null, "556a942f", null);
            y.options.__file = "src/apps/entry/views/signIn/PastGame.vue";
            const z = y.exports,
                x = _().extend({
                    components: {
                        PastGame: z
                    },
                    props: {
                        artifacts: Object
                    },
                    data: () => ({
                        isManaging: !1
                    }),
                    methods: {
                        onManageClick() {
                            this.isManaging = !this.isManaging
                        },
                        onRemoveClick(e) {
                            this.artifacts.remove(e)
                        }
                    }
                });
            var B = (0, D.Z)(x, k, [], !1, null, "5b9392d4", null);
            B.options.__file = "src/apps/entry/views/signIn/PastGames.vue";
            const j = B.exports,
                F = _().extend({
                    components: {
                        Menu: H,
                        PastGames: j
                    },
                    props: {
                        artifacts: Object,
                        twitch: Object
                    },
                    data: () => ({
                        openedTo: null
                    }),
                    computed: {
                        hasUnseenGames() {
                            return !!this.artifacts.artifacts.length && this.artifacts.hasUnviewed
                        }
                    },
                    methods: {
                        onHamburgerClick() {
                            this.openedTo = this.openedTo ? null : "menu"
                        },
                        onPastGamesClick() {
                            this.openedTo = "pastGames"
                        },
                        onTwitchLoginClick() {
                            this.$emit("twitchLoginClick")
                        },
                        onTwitchLogoutClick() {
                            this.$emit("twitchLogoutClick"), this.openedTo = null
                        },
                        onLinkClick(e) {
                            this.$emit("linkClick", e)
                        }
                    }
                });
            var V = (0, D.Z)(F, M, [], !1, null, "8691596e", null);
            V.options.__file = "src/apps/entry/views/signIn/TopBar.vue";
            const q = V.exports;
            var $ = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "jbg password"
                }, [i("img", {
                    staticClass: "image",
                    attrs: {
                        src: s(88005),
                        alt: "Enter Password"
                    }
                }), e._v(" "), i("h3", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t("STRING_PASSWORD_REQUIRED_TITLE")))]), e._v(" "), i("p", {
                    staticClass: "subtext"
                }, [e._v(e._s(e.$t("STRING_PASSWORD_REQUIRED_BODY")))]), e._v(" "), i("div", {
                    staticClass: "actions"
                }, [i("input", {
                    ref: "input",
                    attrs: {
                        type: "text",
                        placeholder: e.$t("ENTRY.PASSWORD_PLACEHOLDER"),
                        maxlength: e.passwordLength,
                        autocapitalize: "off",
                        autocorrect: "off",
                        autocomplete: "off",
                        "aria-label": "password"
                    },
                    domProps: {
                        value: e.password
                    },
                    on: {
                        input: e.onInput
                    }
                }), e._v(" "), i("button", {
                    attrs: {
                        type: "submit",
                        disabled: !e.canSubmit
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve", e.password)
                        }
                    }
                }, [e._v("\n            " + e._s(e.$t("STRING_PASSWORD_JOIN_AS_PLAYER")) + "\n        ")]), e._v(" "), e.room.audienceEnabled ? [i("hr"), e._v(" "), i("p", {
                    staticClass: "or"
                }, [e._v("OR")]), e._v(" "), i("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.$t("STRING_PASSWORD_JOIN_AS_AUDIENCE"),
                        expression: "$t('STRING_PASSWORD_JOIN_AS_AUDIENCE')"
                    }],
                    staticClass: "audience",
                    attrs: {
                        type: "submit"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve", !0)
                        }
                    }
                })] : i("button", {
                    staticClass: "cancel",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve", !1)
                        }
                    }
                }, [e._v("\n            " + e._s(e.$t("ACTION.CANCEL")) + "\n        ")])], 2)])
            };
            $._withStripped = !0;
            const Y = _().extend({
                props: {
                    room: Object
                },
                i18n: {
                    messages: U,
                    sharedMessages: C.s
                },
                data: () => ({
                    passwordLength: 5,
                    password: ""
                }),
                computed: {
                    canSubmit() {
                        return this.password.length >= this.passwordLength
                    }
                },
                mounted() {
                    this.$refs.input.focus()
                },
                methods: {
                    onInput(e) {
                        const t = e.target;
                        this.password = t.value.toUpperCase()
                    }
                }
            });
            var K = (0, D.Z)(Y, $, [], !1, null, "29eab9d7", null);
            K.options.__file = "src/apps/entry/views/signIn/PasswordModal.vue";
            const J = K.exports;
            var Q = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "jbg error"
                }, [i("img", {
                    staticClass: "bubz image",
                    attrs: {
                        src: s(44603),
                        alt: "M Bubs"
                    }
                }), e._v(" "), i("h3", {
                    staticClass: "text"
                }, [e._v("ERROR!")]), e._v(" "), i("h3", {
                    staticClass: "subtext"
                }, [e._v("\n        This pre-release game can only be joined from the url in your press packet (not jackbox.tv).\n    ")]), e._v(" "), i("div", {
                    staticClass: "actions"
                }, [i("button", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve")
                        }
                    }
                }, [e._v("Got It")])])])
            };
            Q._withStripped = !0;
            const Z = _().extend({});
            var X = (0, D.Z)(Z, Q, [], !1, null, "e6c8e964", null);
            X.options.__file = "src/apps/entry/views/signIn/PrereleaseModal.vue";
            const ee = X.exports;
            var te = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "slide-banner"
                }, [e.isLoading ? s("div", {
                    staticClass: "loading"
                }, [e._v("LOADING")]) : e._e(), e._v(" "), !e.isLoading && e.banners.length ? s("VueSlickCarousel", e._b({}, "VueSlickCarousel", e.settings, !1), e._l(e.banners, (function(t) {
                    return s("div", {
                        key: t.url,
                        staticClass: "slide"
                    }, [s("a", {
                        attrs: {
                            href: t.url,
                            target: "_blank"
                        },
                        on: {
                            click: function(s) {
                                return e.onClick(t)
                            }
                        }
                    }, [s("img", {
                        attrs: {
                            src: t.image,
                            draggable: "false",
                            alt: "Advert"
                        }
                    }), e._v(" "), s("p", [e._v(e._s(t.text))])])])
                })), 0) : e._e()], 1)
            };
            te._withStripped = !0;
            var se = s(72529),
                ie = s.n(se);
            const ae = _().extend({
                components: {
                    VueSlickCarousel: ie()
                },
                data: () => ({
                    isLoading: !1,
                    banners: [],
                    settings: {
                        arrows: !1,
                        dots: !0,
                        centerMode: !0,
                        centerPadding: "60px",
                        autoplay: !0,
                        autoplaySpeed: 5e3
                    }
                }),
                mounted() {
                    this.load()
                },
                methods: {
                    load() {
                        var e, t, s, i, a;
                        return t = this, s = void 0, a = function*() {
                            try {
                                const t = yield fetch(O.v.banners.url), s = yield t.json(), i = null !== (e = null == s ? void 0 : s.bannerAds) && void 0 !== e ? e : [];
                                this.banners = i.filter(this.isValidBanner.bind(this)).map((e => ({
                                    url: e.href,
                                    image: e.src,
                                    text: e.text
                                }))), this.banners.length || this.showDefault()
                            } catch (e) {
                                this.showDefault(), console.warn("[SlideBanner] Could not load or parse banner data", e)
                            } finally {
                                this.isLoading = !1
                            }
                        }, new((i = void 0) || (i = Promise))((function(e, o) {
                            function n(e) {
                                try {
                                    _(a.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function r(e) {
                                try {
                                    _(a.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function _(t) {
                                var s;
                                t.done ? e(t.value) : (s = t.value, s instanceof i ? s : new i((function(e) {
                                    e(s)
                                }))).then(n, r)
                            }
                            _((a = a.apply(t, s || [])).next())
                        }))
                    },
                    showDefault() {
                        this.banners = [{
                            url: "https://www.jackboxgames.com/party-pack-seven/?utm_source=jbgtv&utm_medium=jbgtvpp7&utm_campaign=jbgtvpp7",
                            image: "https://s3.amazonaws.com/static.jackboxgames.com/banners/PP7.png",
                            text: "AVAILABLE NOW!"
                        }]
                    },
                    isValidBanner(e) {
                        var t, s;
                        const i = new Date;
                        if (m.K.shared.isSupported && e.tags) {
                            const i = null !== (t = e.tags) && void 0 !== t ? t : [],
                                a = JSON.parse(null !== (s = m.K.shared.get("tags")) && void 0 !== s ? s : "[]");
                            if (!i.every((e => a.includes(e)))) return !1
                        }
                        return !(e.start && i < new Date(e.start)) && !(e.end && i > new Date(e.end))
                    },
                    onClick(e) {
                        this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "bannerClicked",
                            label: e.url
                        })
                    }
                }
            });
            var oe = (0, D.Z)(ae, te, [], !1, null, "bd07a9fc", null);
            oe.options.__file = "src/apps/entry/views/signIn/SlideBanner.vue";
            const ne = oe.exports;
            var re = function(e, t, s, i) {
                return new(s || (s = Promise))((function(a, o) {
                    function n(e) {
                        try {
                            _(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function r(e) {
                        try {
                            _(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function _(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(n, r)
                    }
                    _((i = i.apply(e, t || [])).next())
                }))
            };
            const _e = _().extend({
                components: {
                    PastGame: z,
                    TopBar: q,
                    SlideBanner: ne,
                    Input: g.Z
                },
                i18n: {
                    messages: U,
                    sharedMessages: C.s
                },
                bb: {
                    tos: (e, t) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${t}</a>`
                },
                data() {
                    return {
                        codeLength: 4,
                        nameLength: 12,
                        passwordLength: 5,
                        isConnecting: !1,
                        code: "",
                        name: "",
                        password: "",
                        reconnectData: null,
                        room: null,
                        notFound: !1,
                        artifacts: new N.Q,
                        twitch: new p(this.$route.redirectedFrom),
                        warnings: []
                    }
                },
                computed: {
                    hasFormData() {
                        return this.code.length === this.codeLength && !!this.name
                    },
                    isReconnectable() {
                        return !!this.reconnectData && this.code === this.reconnectData.code
                    },
                    formState() {
                        var e, t;
                        if (!this.room) return {
                            isEnabled: !1,
                            statusText: this.code.length === this.codeLength && this.notFound ? "STATUS_ROOM_NOT_FOUND" : "",
                            submitText: "ACTION.PLAY"
                        };
                        const s = null !== (t = null === (e = (0, h.cF)(this.room.appTag)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : "???";
                        return this.isReconnectable ? {
                            isEnabled: this.hasFormData,
                            statusText: s,
                            submitText: "SUBMIT_RECONNECT",
                            joinAs: this.reconnectData.joinAs
                        } : this.room.locked ? this.room.audienceEnabled ? {
                            isEnabled: this.hasFormData,
                            statusText: "STATUS_GAME_STARTED",
                            submitText: "SUBMIT_JOIN_AUDIENCE",
                            joinAs: "audience"
                        } : {
                            isEnabled: !1,
                            statusText: "STATUS_GAME_STARTED",
                            submitText: "SUBMIT_GAME_STARTED"
                        } : this.room.full ? this.room.audienceEnabled ? {
                            isEnabled: this.hasFormData,
                            statusText: "STATUS_GAME_FULL",
                            submitText: "SUBMIT_JOIN_AUDIENCE",
                            joinAs: "audience"
                        } : {
                            isEnabled: !1,
                            statusText: "STATUS_GAME_FULL",
                            submitText: "SUBMIT_GAME_FULL"
                        } : {
                            isEnabled: this.hasFormData,
                            statusText: s,
                            submitText: "ACTION.PLAY",
                            joinAs: "player"
                        }
                    },
                    recentGames() {
                        var e, t;
                        return null === (t = null === (e = this.artifacts) || void 0 === e ? void 0 : e.artifacts) || void 0 === t ? void 0 : t.slice(0, 3)
                    }
                },
                beforeMount() {
                    this.$api = new T.APIClient({
                        host: v.c.serverUrl,
                        scheme: "https"
                    }), this.populateFromStorage(), this.checkForReconnectRoom(), this.setupTwitch(), this.populateFromURL()
                },
                mounted() {
                    this.sendTiming(), this.$analytics.trackScreenView("signin.login"), this.$storage.isSupported && this.$storage.setTag(`locale-${this.$i18n.locale.substr(0,2)}`)
                },
                methods: {
                    onPastGamesClick() {
                        this.$refs.topBar.$data.openedTo = "pastGames"
                    },
                    populateFromStorage() {
                        var e, t, s;
                        if (!this.$storage.isSupported) return;
                        this.code = (null !== (e = this.$storage.get("roomCode")) && void 0 !== e ? e : "").toUpperCase(), this.name = (null !== (t = this.$storage.get("name")) && void 0 !== t ? t : "").toUpperCase();
                        const i = null !== (s = this.$storage.get("reconnect")) && void 0 !== s ? s : "";
                        if (i) {
                            const [e, t, s] = i.split(":");
                            this.reconnectData = {
                                code: this.code,
                                id: parseInt(e, 10),
                                joinAs: t,
                                secret: s
                            }
                        }
                    },
                    populateFromURL() {
                        !this.code && this.$route.params.roomCode && (this.code = this.$route.params.roomCode.toUpperCase(), this.getRoomInfo())
                    },
                    checkForReconnectRoom() {
                        return re(this, void 0, void 0, (function*() {
                            this.code && (yield this.getRoomInfo(), this.room || (this.code = "", this.$storage.remove("roomCode"), this.$storage.remove("reconnect")))
                        }))
                    },
                    getWarnings() {
                        return re(this, void 0, void 0, (function*() {
                            this.room && (this.warnings = yield class {
                                static warningsForAppTag(e) {
                                    var t, s, i, a, o;
                                    return s = this, i = void 0, o = function*() {
                                        const s = [],
                                            i = (0, h.cF)(e);
                                        return this.isCanvasSupported || s.push("canvas"), this.isFlexboxSupported || s.push("flexbox"), (null === (t = null == i ? void 0 : i.features) || void 0 === t ? void 0 : t.includes("camera")) && !(yield this.isCameraSupported) && s.push("camera"), s
                                    }, new((a = void 0) || (a = Promise))((function(e, t) {
                                        function n(e) {
                                            try {
                                                _(o.next(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }

                                        function r(e) {
                                            try {
                                                _(o.throw(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }

                                        function _(t) {
                                            var s;
                                            t.done ? e(t.value) : (s = t.value, s instanceof a ? s : new a((function(e) {
                                                e(s)
                                            }))).then(n, r)
                                        }
                                        _((o = o.apply(s, i || [])).next())
                                    }))
                                }
                                static get isCanvasSupported() {
                                    const e = document.createElement("canvas");
                                    return !(!e.getContext || !e.getContext("2d"))
                                }
                                static get isFlexboxSupported() {
                                    try {
                                        return CSS.supports("flex-wrap", "wrap")
                                    } catch (e) {
                                        return !1
                                    }
                                }
                                static get isCameraSupported() {
                                    return new Promise(((e, t) => {
                                        var s;
                                        null === (s = navigator.mediaDevices) || void 0 === s || s.enumerateDevices().then((t => e(t.some((e => "videoinput" === e.kind))))).catch((e => t(e)))
                                    }))
                                }
                            }.warningsForAppTag(this.room.appTag))
                        }))
                    },
                    showPreReleaseModal() {
                        this.$showModal(ee)
                    },
                    sendTiming() {
                        var e;
                        if (!(null === (e = window.performance) || void 0 === e ? void 0 : e.timing)) return;
                        const t = Math.round((new Date).getTime() - window.performance.timing.navigationStart);
                        this.$analytics.trackTiming({
                            category: "Send",
                            name: "timing",
                            label: "Signin Page",
                            value: t
                        })
                    },
                    trackConnectEvent() {
                        this.room && (this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "roomJoined",
                            label: this.room.appTag
                        }), this.twitch.user && this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "twitchUserRoomJoined",
                            label: this.room.appTag
                        }))
                    },
                    onCodeInput() {
                        this.code = this.code.replace(/\s/g, ""), this.code = this.code.trim().toUpperCase(), this.code.length < this.codeLength ? this.room = null : this.getRoomInfo()
                    },
                    onNameInput() {
                        this.name = this.name.replace(/^\s+/, "");
                        const e = v.c.sanitizeName(this.name);
                        this.name = e.toUpperCase()
                    },
                    shouldPromptForPassword(e) {
                        return "player" === e && !this.isReconnectable && !!this.room.passwordRequired && !this.password
                    },
                    promptForPassword() {
                        return re(this, void 0, void 0, (function*() {
                            const e = yield this.$showModal(J, {
                                room: this.room
                            });
                            e && (!0 !== e ? (this.password = e, this.connect("player")) : this.connect("audience"))
                        }))
                    },
                    setupTwitch() {
                        return re(this, void 0, void 0, (function*() {
                            if (!this.twitch) return;
                            if (yield this.twitch.prepare(), !this.twitch.user) return;
                            const e = this.$refs.topBar;
                            null == e || e.$forceUpdate();
                            let t = this.twitch.user.display_name;
                            t.length > this.nameLength && (t = `${t.substr(0,this.nameLength-1)}…`), this.name = t
                        }))
                    },
                    onTwitchLoginClick() {
                        this.twitch.login()
                    },
                    onTwitchLogoutClick() {
                        this.twitch.logout(), this.name = ""
                    },
                    onLinkClick(e) {
                        this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "linkClicked",
                            label: e
                        })
                    },
                    shouldPromptForTwitch(e) {
                        return "player" === e && !!this.room.twitchLocked && !this.twitch.user
                    },
                    promptForTwitch() {
                        var e;
                        return re(this, void 0, void 0, (function*() {
                            const t = [{
                                text: this.$t("SUBMIT_TWITCH_LOGIN"),
                                classes: ["twitch"],
                                value: "twitch"
                            }];
                            switch ((null === (e = this.room) || void 0 === e ? void 0 : e.audienceEnabled) ? t.push({
                                    text: this.$t("SUBMIT_JOIN_AUDIENCE"),
                                    classes: ["audience"],
                                    value: "audience"
                                }) : t.push({
                                    text: this.$t("ACTION.CANCEL"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }), yield this.$showModal("Options", {
                                    text: this.$t("STRING_ERROR_REQUIRES_TWITCH_LOGIN"),
                                    options: t
                                })) {
                                case "twitch":
                                    return void this.onTwitchLoginClick();
                                case "audience":
                                    this.connect("audience")
                            }
                        }))
                    },
                    getRoomInfo() {
                        return re(this, void 0, void 0, (function*() {
                            this.notFound = !1;
                            try {
                                const e = yield this.$api.getRoom({
                                    code: this.code
                                });
                                this.room = e, this.getWarnings(), G.o.setup(this.room.locale), this.$root.$i18n.locale = G.o.locale
                            } catch (e) {
                                console.warn(e), this.room = null, this.notFound = !0
                            }
                        }))
                    },
                    getConnectOptions(e) {
                        var t;
                        const s = "audience" === e ? this.room.audienceHost : this.room.host;
                        let i = v.c.sanitizeName(this.name).trim();
                        i.length > this.nameLength && (i = `${i.substr(0,this.nameLength-1)}…`);
                        let a = d();
                        this.$storage.isSupported && (a = null !== (t = this.$storage.get("uuid")) && void 0 !== t ? t : a, this.$storage.set("uuid", a));
                        const o = {
                            host: s,
                            code: this.code.toUpperCase(),
                            name: i,
                            password: this.password,
                            role: e,
                            userId: a,
                            debug: O.v.debug
                        };
                        return this.twitch.user && (o.twitchToken = this.twitch.user.token), this.isReconnectable && (o.id = this.reconnectData.id, o.secret = this.reconnectData.secret), o
                    },
                    connect(e) {
                        return re(this, void 0, void 0, (function*() {
                            if (!e) return;
                            if (this.isConnecting) return;
                            if (yield this.getRoomInfo(), !this.room) return this.showError("ERROR.ROOM_NOT_FOUND");
                            if ((0, h.iU)(this.room.appId)) return this.showPreReleaseModal();
                            if (this.shouldPromptForPassword(e)) return this.promptForPassword();
                            if (this.shouldPromptForTwitch(e)) return this.promptForTwitch();
                            const t = this.getConnectOptions(e);
                            if (!t.host) return;
                            if (!t.code) return;
                            if (!t.name) return;
                            if (this.isConnecting) return;
                            this.isConnecting = !0;
                            const i = new T.WSClient(t);
                            try {
                                const a = yield i.connect();
                                this.$ecast = i, this.$syncEcast(), this.$setSentryTag("role", this.$ecast.role), this.$debug.setup(this.$ecast, this.room), this.trackConnectEvent(), this.$storage.isSupported && (this.$storage.set("name", t.name), this.$storage.set("roomCode", this.code), this.$storage.set("reconnect", `${a.id}:${e}:${a.secret}`)), yield class {
                                    static load(e) {
                                        return b(this, void 0, void 0, (function*() {
                                            (0, A.c)("[GameLoader] load", e);
                                            const t = (0, h.cF)(e.room.appTag);
                                            if (!t) throw Error(`[GameLoader] no games exist with tag (${e.room.appTag})`);
                                            const i = "vue" === t.app ? () => b(this, void 0, void 0, (function*() {
                                                return s.e(2104).then(s.bind(s, 52104))
                                            })) : () => b(this, void 0, void 0, (function*() {
                                                return Promise.all([s.e(6498), s.e(524), s.e(972)]).then(s.bind(s, 10972))
                                            }));
                                            try {
                                                const s = yield i();
                                                yield s.load(e, t)
                                            } catch (e) {
                                                console.error("Unable to load app", e)
                                            }
                                        }))
                                    }
                                }.load({
                                    client: this.$ecast,
                                    room: this.room,
                                    welcome: a
                                }), this.$root.$destroy(), o.n_({
                                    type: "navigation",
                                    category: "navigation.unload",
                                    message: "Entry app is destroyed",
                                    level: n.z.Info,
                                    timestamp: Date.now() / 1e3
                                })
                            } catch (t) {
                                console.error("[SignIn]", t), this.isConnecting = !1, this.onConnectionError(t, e)
                            }
                        }))
                    },
                    onConnectionError(e, t) {
                        var s;
                        return re(this, void 0, void 0, (function*() {
                            return e instanceof I.EcastRoomIsFull ? "audience" === t ? this.promptForRetry("ERROR_AUDIENCE_FULL") : this.promptForRetry("ERROR_ROOM_FULL") : e instanceof I.EcastRoomIsLocked ? this.promptForRetry("STRING_ERROR_ROOM_IS_LOCKED") : e instanceof I.EcastInvalidPassword ? (yield this.$showModal("Error", {
                                text: this.$t("ERROR.TITLE"),
                                subtext: this.$t("STRING_ERROR_INCORRECT_PASSWORD"),
                                dismissText: this.$t("ACTION.TRY_AGAIN")
                            }), this.password = "", this.connect("player")) : e instanceof I.EcastRoomNotFound ? this.showError("ERROR.ROOM_NOT_FOUND") : e instanceof I.EcastTwitchLoginRequired ? this.showError("STRING_ERROR_REQUIRES_TWITCH_LOGIN") : e instanceof I.EcastPasswordRequired ? this.showError("STRING_PASSWORD_REQUIRED_TITLE") : e instanceof I.EcastFilterError ? this.showError("ERROR_FILTER_NAME") : (null === (s = e.message) || void 0 === s ? void 0 : s.includes("Network request failed")) ? this.showError("ERROR_UNABLE_TO_CONNECT") : void this.showError("STRING_ERROR_GENERIC")
                        }))
                    },
                    promptForRetry(e) {
                        var t;
                        return re(this, void 0, void 0, (function*() {
                            let s = [{
                                text: this.$t("ACTION.OK"),
                                classes: ["cancel"],
                                value: "close"
                            }];
                            if ((null === (t = this.room) || void 0 === t ? void 0 : t.audienceEnabled) && (s = [{
                                    text: this.$t("STRING_PASSWORD_JOIN_AS_AUDIENCE"),
                                    classes: ["audience"],
                                    value: "audience"
                                }, {
                                    text: this.$t("ACTION.CANCEL"),
                                    classes: ["cancel"],
                                    value: "close"
                                }]), "ERROR_AUDIENCE_FULL" === e && (s = [{
                                    text: this.$t("ACTION.OK"),
                                    classes: ["ok"],
                                    value: "ok"
                                }]), "audience" === (yield this.$showModal("Options", {
                                    text: this.$t(e),
                                    options: s
                                }))) return this.connect("audience")
                        }))
                    },
                    showError(e) {
                        this.$showModal("Error", {
                            text: this.$t("ERROR.TITLE"),
                            subtext: this.$t(e),
                            dismissText: this.$t("ACTION.OK")
                        })
                    }
                }
            });
            var Ee = (0, D.Z)(_e, i, [], !1, null, "2ba6adc4", null);
            Ee.options.__file = "src/apps/entry/views/signIn/Main.vue";
            const ue = Ee.exports
        },
        6305: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => _
            });
            var i = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("input", {
                    ref: "input",
                    attrs: {
                        enterkeyhint: "done"
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: e.onInput
                    }
                })
            };
            i._withStripped = !0;
            var a = s(2934),
                o = s.n(a);
            const n = o().extend({
                props: {
                    value: String
                },
                watch: {
                    value(e, t) {
                        e !== t && (this.$refs.input.value = e)
                    }
                },
                methods: {
                    onInput(e) {
                        return t = this, s = void 0, a = function*() {
                            const t = e.target;
                            if (!(null == t ? void 0 : t.value)) return;
                            const s = -1 === t.maxLength ? Number.MAX_SAFE_INTEGER : t.maxLength;
                            t.value.length > s ? t.value = t.value.substring(0, s) : (this.$emit("input", t.value), yield o().nextTick(), t.value !== this.value && (t.value = this.value))
                        }, new((i = void 0) || (i = Promise))((function(e, o) {
                            function n(e) {
                                try {
                                    _(a.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function r(e) {
                                try {
                                    _(a.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function _(t) {
                                var s;
                                t.done ? e(t.value) : (s = t.value, s instanceof i ? s : new i((function(e) {
                                    e(s)
                                }))).then(n, r)
                            }
                            _((a = a.apply(t, s || [])).next())
                        }));
                        var t, s, i, a
                    }
                }
            });
            var r = (0, s(51900).Z)(n, i, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/Input.vue";
            const _ = r.exports
        },
        98087: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n    <path d="M187.4,47.8l-34.1-15.9V29c0-8.8-7.2-16-16-16H57.8c-8.8,0-16,7.2-16,16v18.9L13.6,61.1c-3.9,1.8-6.8,5-8.3,9\n\tc-1.5,4-1.3,8.4,0.5,12.2l45,96.4c1.8,3.9,5,6.8,9,8.3c1.8,0.6,3.6,1,5.5,1c2.3,0,4.6-0.5,6.8-1.5l42.7-19.9l14.2,6.6\n\tc2.2,1,4.5,1.5,6.7,1.5c6,0,11.8-3.4,14.5-9.2l45-96.4C198.9,61,195.4,51.5,187.4,47.8z M133.4,91.7L107,35.2\n\tc-0.4-0.8-0.8-1.5-1.2-2.1h27.6V91.7z M61.8,33h12l-12,5.6V33z M67.2,166.7L25.7,77.5l64.9-30.3l41.6,89.2l-21.7,10.1c0,0,0,0,0,0\n\tL67.2,166.7z M153.4,111.4V54l22,10.3L153.4,111.4z"/>\n</svg>'
        },
        52819: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n\t<path d="M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15\n\t\tS87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z"/>\n\t<path d="M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4\n\t\ts7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z"/>\n</svg>\n'
        },
        85061: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n    <path d="M164.7,52.2h-20.7V35.5c0-6.2-5-11.2-11.2-11.2H47.6c-6.2,0-11.2,5-11.2,11.2v118c0,12.8,10.4,23.2,23.2,23.2h61.3\n\tc12.8,0,23.2-10.4,23.2-23.2v-16.2h20.7c14.3,0,25.9-11.6,25.9-25.9V78.1C190.7,63.8,179,52.2,164.7,52.2z M174.2,111.4\n\tc0,5.2-4.3,9.5-9.5,9.5h-20.7V68.6h20.7c5.2,0,9.5,4.3,9.5,9.5V111.4z"/>\n</svg>\n'
        },
        94379: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n    <path d="M145.5,184.5H55.5c-4.1,0-7.5-3.4-7.5-7.5V95.2H29.6c-3.3,0-6.2-2.1-7.2-5.2L10,50.5c-1.2-3.7,0.7-7.7,4.3-9.2L72.5,17\n\tc1.8-0.7,3.8-0.8,5.6-0.1c0.1,0,6.3,15.1,22.4,15.1S122.7,17,122.9,17c1.8-0.7,3.8-0.7,5.6,0.1l58.2,24.2c3.6,1.5,5.4,5.5,4.3,9.2\n\tL178.5,90c-1,3.1-3.9,5.2-7.2,5.2H153V177C153,181.2,149.7,184.5,145.5,184.5z"/>\n</svg>\n\n\n'
        },
        88005: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/290cf1d25c6c6b09a8b5.png"
        },
        44603: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/43f061006b1916fa3b09.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/4948.2ce9df2f7021b25b9f77.js.map
