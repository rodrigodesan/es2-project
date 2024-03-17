import axios from 'axios';

import Region from '../models/Region';
import State from '../models/State';
import Year from '../models/Year';
import Resource from '../models/Resource';
import CommitmentTerm from '../models/CommitmentTerm';

class SetupDb {
  async setupRegions() {
    const brazilianRegions = [
      { name: "Norte", acronym: "NO" },
      { name: "Nordeste", acronym: "NE" },
      { name: "Centro-Oeste", acronym: "CO" },
      { name: "Sudeste", acronym: "SE" },
      { name: "Sul", acronym: "SU" },
    ];

    try {
      const createdRegions = await Region.bulkCreate(brazilianRegions);
      console.log(createdRegions);
    } catch (e) {
      console.log(e);
    }
  }

  async setupStates() {
    const brazilianStates = [
      { acronym: "AC", name: "Acre", region: "NO" },
      { acronym: "AL", name: "Alagoas", region: "NE" },
      { acronym: "AP", name: "Amapá", region: "NO" },
      { acronym: "AM", name: "Amazonas", region: "NO" },
      { acronym: "BA", name: "Bahia", region: "NE" },
      { acronym: "CE", name: "Ceará", region: "NE" },
      { acronym: "DF", name: "Distrito Federal", region: "CO" },
      { acronym: "ES", name: "Espírito Santo", region: "SE" },
      { acronym: "GO", name: "Goiás", region: "CO" },
      { acronym: "MA", name: "Maranhão", region: "NE" },
      { acronym: "MT", name: "Mato Grosso", region: "CO" },
      { acronym: "MS", name: "Mato Grosso do Sul", region: "CO" },
      { acronym: "MG", name: "Minas Gerais", region: "SE" },
      { acronym: "PA", name: "Pará", region: "NO" },
      { acronym: "PB", name: "Paraíba", region: "NE" },
      { acronym: "PR", name: "Paraná", region: "SU" },
      { acronym: "PE", name: "Pernambuco", region: "NE" },
      { acronym: "PI", name: "Piauí", region: "NE" },
      { acronym: "RJ", name: "Rio de Janeiro", region: "SE" },
      { acronym: "RN", name: "Rio Grande do Norte", region: "NE" },
      { acronym: "RS", name: "Rio Grande do Sul", region: "SU" },
      { acronym: "RO", name: "Rondônia", region: "NO" },
      { acronym: "RR", name: "Roraima", region: "NO" },
      { acronym: "SC", name: "Santa Catarina", region: "SU" },
      { acronym: "SP", name: "São Paulo", region: "SE" },
      { acronym: "SE", name: "Sergipe", region: "NE" },
      { acronym: "TO", name: "Tocantins", region: "NO" },
    ];

    try {
      const regions = await Region.findAll();
      const statesToCreate = [];
      const stateCodes = [];
      brazilianStates.forEach((state) => {
        if (!stateCodes.includes(state.acronym)) {
          let regionId;
          for (let j = 0; j < regions.length; j++) {
            if (regions[j].acronym === state.region) {
              regionId = regions[j].id;
              break;
            }
          }
          if (regionId) {
            stateCodes.push(state.Estado_Ibge);
            statesToCreate.push({
              ...state,
              region: regionId,
            });
          }
        }
      });
      const createdStates = await State.bulkCreate(statesToCreate);
      console.log(createdStates);
    } catch (e) {
      console.log(e);
    }
  }

  async setupTerms(totalQueries) {
    try {
      const { data: allData } = await axios.get(`https://www.fnde.gov.br/olinda-ide/servico/DADOS_ABERTOS_CDE_SIMEC_TERMO_COMPROMISSO_PAR3_PAR4/versao/v1/odata/PAR4_Itens()?$top=${totalQueries}&$format=json&$select=ibge,entidade,estado,regdescricao,razao_social,cnpj,processo,termo,inicio_vigencia,fim_vigencia,valor_termo,total_empenho,pagamento_efetivado,planejamento,ano,iniciativa,objeto,cod_item_planejamento,item,quantidade_solicitada,quantidade_aprovada,valor_item,valor_total_aprovado,tipo_assistencia,nu_adesao`);

      const states = await State.findAll();

      const years = await this.#setupYears(allData.value);

      const resources = await this.#setupResources(allData.value);

      const termsToCreate = [];
      allData.value.forEach((dataItem) => {
        const thisResource = resources.find((resource) => {
          const hasResource = resource.item === dataItem.item;
          return hasResource;
        });
        const thisState = states.find((state) => {
          const hasState = state.acronym === dataItem.estado;
          return hasState;
        });
        const thisYear = years.find((year) => {
          const hasYear = year.year === Number(dataItem.ano);
          return hasYear;
        });

        if (thisResource && thisState && thisYear) {
          termsToCreate.push({
            cnpj: dataItem.cnpj,
            entity: dataItem.entidade,
            companyName: dataItem.razao_social,
            process: dataItem.processo,
            term: dataItem.termo,
            value: Number(dataItem.valor_termo),
            validityStart: Date(dataItem.inicio_vigencia),
            validityEnd: Date(dataItem.fim_vigencia),
            state: thisState.id,
            year: thisYear.id,
            resource: thisResource.id,
          });
        }
      });

      const createdTerms = await CommitmentTerm.bulkCreate(termsToCreate);
      console.log(createdTerms);
    } catch (err) {
      console.log(err);
    }
  }

  async #setupYears(data) {
    const years = [];
    data.forEach((dataItem) => {
      const thisYear = years.find((year) => {
        const hasYear = year.year === Number(dataItem.ano);
        return hasYear;
      });
      if (!thisYear) {
        years.push({
          year: Number(dataItem.ano),
        });
      }
    });
    return Year.bulkCreate(years);
  }

  async #setupResources(data) {
    const resources = [];
    data.forEach((dataItem) => {
      const thisResource = resources.find((resource) => {
        const hasResource = resource.item === dataItem.item;
        return hasResource;
      });
      if (!thisResource && dataItem.cod_item_planejamento) {
        resources.push({
          item: dataItem.item,
          initiative: dataItem.iniciativa,
          object: dataItem.objeto,
          value: Number(dataItem.valor_item),
        });
      }
    });
    return Resource.bulkCreate(resources);
  }
}

export default new SetupDb();
