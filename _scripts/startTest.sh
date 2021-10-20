docker compose -f docker-compose.test.yaml up
docker exec -it telegraph_test_api bash -c "npm install && npm test"