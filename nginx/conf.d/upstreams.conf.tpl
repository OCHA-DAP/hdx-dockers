upstream ckan {
    server ${HDX_CKAN_ADDR}:${HDX_CKAN_PORT};
}

upstream dataproxy {
    server ${HDX_DATAPROXY_ADDR}:${HDX_DATAPROXY_PORT};
}

upstream crisismap {
    server a.tile.openstreetmap.fr;
    server b.tile.openstreetmap.fr;
    server c.tile.openstreetmap.fr;
}

upstream cps {
    server ${HDX_CPS_ADDR}:${HDX_CPS_PORT};
}
