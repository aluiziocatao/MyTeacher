import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import ListaProfessores from '../src/components/ListaProfessores/ListaProfessores'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Professor 1',
      foto: "https://github.com/aluiziocatao.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 100.00
    },
    {
      id: 2,
      nome: 'Professor 2',
      foto: "https://github.com/aluiziocatao.png",
      descricao: "Descrição do Professor 2",
      valor_hora: 120.00
    },
    {
      id: 3,
      nome: 'Professor 3',
      foto: "https://github.com/aluiziocatao.png",
      descricao: "Descrição do Professor 3",
      valor_hora: 140.00
    },
    {
      id: 4,
      nome: 'Professor 4',
      foto: "https://github.com/aluiziocatao.png",
      descricao: "Descrição do Professor 4",
      valor_hora: 160.00
    }
  ]

  return (    
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <ListaProfessores professores={professores}></ListaProfessores>
      </Box>
  )
}

export default Home
