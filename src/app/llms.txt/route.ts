import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Plate Flanges\n> Source for plate flanges with specifications, sizing, materials, and technical data.\n\n## About\nPlate Flanges (plateflanges.com) is an industrial resource for plate flanges used in piping systems, pressure vessels, and industrial applications. We provide technical specifications, material grades, sizing data, pressure class information, and standards compliance details per ASME, ANSI, and API standards.\n\n## Products\n- Plate Flanges in all pressure classes (Class 150 through Class 2500)\n- Material grades: Carbon steel (A105), Stainless steel (A182 F304/F316), Alloy steel (A182 F11/F22), Low-temp (A350 LF2)\n- Size range: 1/2 inch through 60 inch and larger custom sizes\n- Standards: ASME B16.5, ASME B16.47, API 605, MSS SP-44\n- Full material traceability and mill certifications\n- Custom manufacturing for non-standard specifications\n\n## Contact\n- Email: sales@texasflange.com\n- Phone: 281-484-8325\n- Quote requests: https://www.texasflange.com/contact-us/?ref=plateflanges\n- Website: https://plateflanges.com\n- Parent Company: https://texasflange.com?ref=plateflanges\n\n## Standards\nASME B16.5, ASME B16.47, ASME B16.36, API 605, API 6A, MSS SP-44, ASTM material specifications`;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
