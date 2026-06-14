import { t as require_dist } from "./dist-BkMweq9c.js";
import { t as SEO } from "./SEO-Cw9lY6xc.js";
import { t as createLucideIcon } from "./createLucideIcon-d-ZGlwaX.js";
import { a as CircleAlert, i as LoaderCircle, n as useAdmin, r as GithubService, t as AdminProvider } from "./AdminContext-bpcRMjZm.js";
import { t as LogOut } from "./log-out-ifISwOAG.js";
import { i as ArrowLeft, r as ArrowRight, t as Lock } from "../entry-server.js";
import { useCallback, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var House = createLucideIcon("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]);
//#endregion
//#region src/components/TurnstileWidget.tsx
var import_dist = require_dist();
//#endregion
//#region src/pages/Admin/AdminLogin.tsx
var LOGIN_ERROR_KEY = "kg_admin_login_error";
function consumeLoginError() {
	if (typeof sessionStorage === "undefined") return "";
	const savedError = sessionStorage.getItem(LOGIN_ERROR_KEY) || "";
	sessionStorage.removeItem(LOGIN_ERROR_KEY);
	return savedError;
}
function AdminLogin() {
	const { login } = useAdmin();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authenticating, setAuthenticating] = useState(false);
	const [error, setError] = useState(consumeLoginError);
	const [turnstileToken, setTurnstileToken] = useState("");
	const turnstileSiteKey = void 0;
	useCallback((token) => {
		setTurnstileToken(token);
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		const config = {
			email: email.trim(),
			password: password.trim()
		};
		if (!config.email || !config.password) {
			setError("Credentials are required.");
			return;
		}
		setAuthenticating(true);
		try {
			const session = await new GithubService(config).createSession(turnstileToken || void 0);
			const sessionConfig = session.sessionToken ? {
				email: config.email,
				password: "",
				sessionToken: session.sessionToken
			} : config;
			await new GithubService(sessionConfig).getJsonFile("src/data/projects.json");
			login(sessionConfig);
		} catch (err) {
			const message = err?.message || "";
			setError(message.toLowerCase().includes("invalid credentials") ? "Email or password is incorrect." : `Authentication failed: ${message || "Unable to verify credentials."}`);
		} finally {
			setAuthenticating(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background flex flex-col items-center justify-center p-4 font-mono relative",
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "Kernel Guard | Secure Auth",
				description: "Admin Login",
				noIndex: true
			}),
			/* @__PURE__ */ jsxs(import_dist.Link, {
				to: "/",
				className: "absolute top-8 left-8 flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-xs uppercase tracking-widest",
				children: [/* @__PURE__ */ jsx(House, { className: "w-4 h-4" }), "Return to Surface"]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-md",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-10",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "inline-flex items-center justify-center w-16 h-16 border-2 border-primary bg-primary/10 text-primary mb-6",
							children: /* @__PURE__ */ jsx(Lock, { className: "w-8 h-8" })
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-2xl text-foreground font-light tracking-widest uppercase mb-2",
							children: "System Override"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-foreground/50 text-sm",
							children: "Verify administrator credentials before opening the dashboard."
						})
					]
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "bg-surface border border-border p-8 space-y-6",
					children: [
						error && /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm",
							children: [/* @__PURE__ */ jsx(CircleAlert, { className: "w-5 h-5 shrink-0" }), /* @__PURE__ */ jsx("span", { children: error })]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "block text-xs uppercase tracking-widest text-foreground/70 mb-2",
							children: "Administrator Email"
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" }), /* @__PURE__ */ jsx("input", {
								type: "email",
								value: email,
								onChange: (e) => {
									setEmail(e.target.value);
									setError("");
								},
								disabled: authenticating,
								className: "w-full bg-background border border-border focus:border-primary text-foreground py-3 pl-10 pr-4 outline-none transition-colors",
								placeholder: "Enter administrator email"
							})]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								className: "block text-xs uppercase tracking-widest text-foreground/70 mb-2",
								children: "Secure Password"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" }), /* @__PURE__ */ jsx("input", {
									type: "password",
									value: password,
									onChange: (e) => {
										setPassword(e.target.value);
										setError("");
									},
									disabled: authenticating,
									className: "w-full bg-background border border-border focus:border-primary text-foreground py-3 pl-10 pr-4 outline-none transition-colors",
									placeholder: "************"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-foreground/40 mt-2",
								children: "Your session is securely verified through our zero-trust backend."
							})
						] }),
						turnstileSiteKey,
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							disabled: authenticating || Boolean(turnstileSiteKey),
							className: "w-full flex items-center justify-between p-4 kg-action-primary transition-colors uppercase tracking-widest text-sm font-medium group disabled:opacity-60 disabled:cursor-not-allowed",
							children: [/* @__PURE__ */ jsx("span", { children: authenticating ? "Verifying..." : "Authenticate" }), authenticating ? /* @__PURE__ */ jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })]
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/Admin/AdminLayout.tsx
function AdminContent() {
	const { config, logout } = useAdmin();
	const navigate = (0, import_dist.useNavigate)();
	const handleLogout = () => {
		logout();
		navigate("/");
	};
	if (!config) return /* @__PURE__ */ jsx(AdminLogin, {});
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background pt-24 pb-24 font-mono",
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "Kernel Guard | Admin Portal",
				description: "Secure Administration Portal",
				noIndex: true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 h-16 flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ jsx(import_dist.Link, {
								to: "/",
								className: "text-foreground/60 hover:text-primary transition-colors",
								children: /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-primary font-bold tracking-widest uppercase text-sm",
								children: "KG_ADMIN_PORTAL"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "hidden sm:inline-block text-xs text-foreground/40 border-l border-border pl-4",
								children: config.email
							})
						]
					}), /* @__PURE__ */ jsxs("button", {
						onClick: handleLogout,
						className: "flex items-center gap-2 px-4 py-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-colors uppercase tracking-wider text-xs font-semibold",
						children: [/* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline-block",
							children: "Logout"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 mt-8",
				children: /* @__PURE__ */ jsx(import_dist.Outlet, {})
			})
		]
	});
}
function AdminLayout() {
	return /* @__PURE__ */ jsx(AdminProvider, { children: /* @__PURE__ */ jsx(AdminContent, {}) });
}
//#endregion
export { AdminLayout as default };
