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

        <div class="card">
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 mb-3">
                            <label class="form-label">Cliente:</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3">
                            <label class="form-label">Data:</label>
                            <input type="date" class="form-control" required>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3">
                            <label class="form-label">Valor:</label>
                            <div class="input-group">
                                <span class="input-group-text">R$</span>
                                <input type="number" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3">
                            <label class="form-label">Status:</label>
                            <select class="form-select" required>
                                <option value="">Selecione...</option>
                                <option value="Pendente">Pendente</option>
                                <option value="Aprovado">Aprovado</option>
                                <option value="Rejeitado">Rejeitado</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-end">
                            <button type="submit" class="btn" style="background-color: #CDC9C9;">
                                SALVAR ORÇAMENTO
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>