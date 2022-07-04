module.exports = (sequelize, DataTypes) => {
    const ViewPemilihan = sequelize.define('ViewPemilihan',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        no_urut: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ketua_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        wakil_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        video: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        visi: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        misi: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
        },
        nama_ketua: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kelas_ketua: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nama_wakil: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kelas_wakil: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jumlah: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        tableName: 'view_pemilihan',
        timestamps: true,
    });
    
    return ViewPemilihan;
}