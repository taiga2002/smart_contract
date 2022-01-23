import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB18BE53ace0433a8ff1f8664216De3aF4A33D46f'
);

export default instance;
