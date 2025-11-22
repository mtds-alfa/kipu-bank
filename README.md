Descrição:
O dono da carteira pode depositar tokens nativos (ETH) em um cofre pessoal.
O dono da carteira pode sacar fundos de seu cofre, mas apenas até um limite fixo por transação.
O contrato impõe um limite global de depósitos (bankCap), definido durante a implantação.
Interações internas e externas seguem boas práticas de segurança e instruções revert com erros personalizados claros, caso as condições não sejam atendidas.
Eventos são emitidos tanto em depósitos quanto em saques bem-sucedidos.
O contrato registra o número de depósitos e saques.
Utilizado padrões de Segurança.
