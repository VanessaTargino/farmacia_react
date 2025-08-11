import type { Categoria } from "./Categoria";
import type { Usuario } from "./Usuario";

export interface Produtos {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  foto: string;
  usuario: Usuario | null;
  categoria: Categoria | null;
  quantidade?: number
}