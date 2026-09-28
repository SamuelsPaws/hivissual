import { ContactFormSubmission } from "@/lib/types/emailTemplates";

export default function EmailTemplate({
	name,
	email,
	company,
	need,
	budget,
	message,
}: ContactFormSubmission) {
	const details = [
		["Nombre", name],
		["Correo", email],
		["Empresa", company],
		["Necesidad", need],
		["Presupuesto", budget],
	].filter((detail): detail is [string, string] => Boolean(detail[1]));

	return (
		<div style={{ margin: 0, padding: "32px 16px", backgroundColor: "#f3f3f1", fontFamily: "Arial, Helvetica, sans-serif", color: "#0c0c0d" }}>
			<div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #ddddda" }}>
				<div style={{ padding: "24px 32px", backgroundColor: "#0c0c0d", borderBottom: "3px solid #c9b23f" }}>
					<p style={{ margin: 0, color: "#fafafa", fontSize: "22px", fontWeight: 700, letterSpacing: "2px" }}>HIVISSUAL.COM - CONTACTO</p>
				</div>

				<div style={{ padding: "32px" }}>
					<p style={{ margin: "0 0 8px", color: "#6b6b70", fontSize: "12px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" }}>
						Nuevo contacto desde el sitio web
					</p>
					<h1 style={{ margin: "0 0 24px", fontSize: "26px", lineHeight: 1.3 }}>{name} quiere conversar con Hivissual</h1>

					<table role="presentation" cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
						<tbody>
							{details.map(([label, value]) => (
								<tr key={label}>
									<td style={{ width: "120px", padding: "12px 12px 12px 0", borderTop: "1px solid #e8e8e5", color: "#6b6b70", fontSize: "13px", fontWeight: 700, verticalAlign: "top" }}>{label}</td>
									<td style={{ padding: "12px 0", borderTop: "1px solid #e8e8e5", fontSize: "15px", lineHeight: 1.5, verticalAlign: "top" }}>
										{label === "Correo" ? <a href={`mailto:${value}`} style={{ color: "#4f4519" }}>{value}</a> : value}
									</td>
								</tr>
							))}
						</tbody>
					</table>

					{message && (
						<div style={{ marginTop: "24px", padding: "20px", backgroundColor: "#f7f7f5", borderLeft: "3px solid #c9b23f" }}>
							<p style={{ margin: "0 0 8px", color: "#6b6b70", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Mensaje</p>
							<p style={{ margin: 0, fontSize: "15px", lineHeight: 1.65, whiteSpace: "pre-wrap" }}>{message}</p>
						</div>
					)}

					<a href={`mailto:${email}?subject=${encodeURIComponent("Re: Tu consulta a Hivissual")}`} style={{ display: "inline-block", marginTop: "28px", padding: "12px 20px", backgroundColor: "#0c0c0d", color: "#fafafa", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
						Responder a {name}
					</a>
				</div>

				<div style={{ padding: "16px 32px", backgroundColor: "#f7f7f5", borderTop: "1px solid #e8e8e5" }}>
					<p style={{ margin: 0, color: "#77777c", fontSize: "12px", lineHeight: 1.5 }}>Este mensaje fue generado automáticamente desde el formulario de contacto de hivissual.com.</p>
				</div>
			</div>
		</div>
	);
}
