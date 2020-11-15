import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/46360769?s=460&u=4e946615605e1752fd4e7c74c83d2733af237e69&v=4"
            alt="Rafael Santana"
          />

          <div>
            <strong>rafael-santana-almeida/gostack-github-explorer</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/46360769?s=460&u=4e946615605e1752fd4e7c74c83d2733af237e69&v=4"
            alt="Rafael Santana"
          />

          <div>
            <strong>rafael-santana-almeida/gostack-github-explorer</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/46360769?s=460&u=4e946615605e1752fd4e7c74c83d2733af237e69&v=4"
            alt="Rafael Santana"
          />

          <div>
            <strong>rafael-santana-almeida/gostack-github-explorer</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
