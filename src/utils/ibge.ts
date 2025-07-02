import municipios from "./municipios_ibge.json";

export function getMunicipioNomeUf(codigo: string): string {
  if (municipios[codigo]) {
    console.log("Município encontrado localmente:", municipios[codigo]);
    return municipios[codigo];
  }

  console.warn("Município não encontrado no dicionário local:", codigo);
  return "";
}
