<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-expand-lg" style="background-color: #CDC9C9;">
        <div class="container-fluid">
            <span class="navbar-brand text-white">Modern System</span>
        </div>
    </nav>

    <div class="container mt-4">
        <h1 style="font-weight:100; color:gray; margin-bottom: 16px;"><?= $title ?></h1>

        <div class="card mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-sm-4 col-md-4 mb-3">
                        <label class="form-label">Nº Orçamento:</label>
                        <input type="number" class="form-control">
                    </div>
                    <div class="col-12 col-sm-4 col-md-4 mb-3">
                        <label class="form-label">Cliente:</label>
                        <select class="form-select">
                            <option value="">Selecione...</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-4 col-md-2 mb-3">
                        <label class="form-label">Data Inicial:</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-12 col-sm-4 col-md-2 mb-3">
                        <label class="form-label">Data Final:</label>
                        <input type="date" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-end">
                        <button type="button" class="btn" style="background-color: #CDC9C9; color: white;">
                            Gerar Relatório
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cliente</th>
                                <th>Data</th>
                                <th>Valor</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($orcamentos as $orcamento): ?>
                                <tr>
                                    <td><?= $orcamento['orcamento_id'] ?></td>
                                    <td><?= $orcamento['cliente'] ?></td>
                                    <td><?= $orcamento['data'] ?></td>
                                    <td><?= $orcamento['valor'] ?></td>
                                    <td><?= $orcamento['status'] ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>