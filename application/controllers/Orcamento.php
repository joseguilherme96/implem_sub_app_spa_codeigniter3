<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Orcamento extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function cadastro()
    {
        $data['title'] = 'Cadastro de Orçamento';
        $this->load->view('orcamento/cadastro', $data);
    }

    public function relatorio()
    {
        $data['title'] = 'Relatório de Orçamentos';
        $data['orcamentos'] = [
            [
                'orcamento_id' => 1,
                'cliente' => 'VY Host',
                'data' => '02/10/2025',
                'valor' => 'R$ 1000.00',
                'status' => 'Aprovado'
            ],
            [
                'orcamento_id' => 2,
                'cliente' => 'ZX Host',
                'data' => '02/10/2025',
                'valor' => 'R$ 2510.00',
                'status' => 'Aprovado'
            ]
        ];
        $this->load->view('orcamento/relatorio', $data);
    }
}
